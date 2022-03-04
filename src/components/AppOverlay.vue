<template>
  <form class="overlay" @submit.prevent="login">
    <label for="name" class="overlay__label">Введите имя, чтобы войти</label>
    <input id="name" v-model.trim="username" type="text" class="overlay__input" />
    <button class="overlay__btn" :disabled="!username" type="submit">Войти</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const username = ref(null);
const store = useStore();

const login = () => {
  store.dispatch('login', username.value);
};
</script>
