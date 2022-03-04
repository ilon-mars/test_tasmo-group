import { createStore } from 'vuex';
import { IndexedDB } from '@/service/indexedDBService.js';
import { generateChance } from '@/utils/helpers.js';

export const store = createStore({
  state() {
    return {
      db: null,
      username: null,
      messages: [],
    };
  },

  mutations: {
    SET_DB: (state, payload) => {
      state.db = payload;
    },
    SET_MESSAGES: (state, messages) => {
      state.messages = messages;
    },
    ADD_MESSAGE: (state, message) => {
      state.messages.unshift(message);
    },
    PATCH_MESSAGE: (state, updatedMsg) => {
      state.messages.shift();
      state.messages.unshift(updatedMsg);
    },
    DELETE_MESSAGE: (state, msgIndex) => {
      state.messages.splice(msgIndex, 1);
    },
    SET_USERNAME: (state, username) => {
      state.username = username;
    },
  },

  actions: {
    async connectDB({ commit }) {
      commit('SET_DB', await new IndexedDB('chat', 1));
    },
    async sendMessage({ dispatch, commit }, message) {
      commit('ADD_MESSAGE', { ...message, status: 'loading' });

      const status = generateChance();
      const fullMsg = { ...message, status };

      setTimeout(() => {
        dispatch('addMessageToDB', fullMsg);
        commit('PATCH_MESSAGE', { ...message, status });
      }, 1000);
    },
    async fetchMessages({ state, dispatch, commit }) {
      await dispatch('connectDB');
      const messages = await state.db.getAll();
      commit('SET_MESSAGES', messages.reverse());
    },
    async addMessageToDB({ dispatch, state }, message) {
      await dispatch('connectDB');
      await state.db.set(message);
    },
    async resendMessage({ dispatch, state, commit }, message) {
      const msgIndex = state.messages.findIndex(item => item.created === message.created);

      await dispatch('connectDB');
      await state.db.delete(message.created);
      await dispatch('sendMessage', message);
      commit('DELETE_MESSAGE', msgIndex);
    },
    login({ commit }, username) {
      commit('SET_USERNAME', username);
    },
  },
});
