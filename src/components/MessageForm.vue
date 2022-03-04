<template>
  <form class="send-message" @submit.prevent="onSubmit">
    <textarea
      v-model.trim="message"
      class="send-message__body"
      placeholder="Начните писать..."
    ></textarea>

    <button
      type="submit"
      class="send-message__submit"
      :disabled="!message"
      :class="{ active: message }"
    >
      <svg class="send-message__icon">
        <use xlink:href="@/assets/img/sprite.svg#send" />
      </svg>
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const message = ref('');
const loggedUsername = store.state.username;

const onSubmit = e => {
  store.dispatch('sendMessage', {
    created: Date.now(),
    author: loggedUsername,
    text: message.value,
  });

  e.target.reset();
};
</script>
