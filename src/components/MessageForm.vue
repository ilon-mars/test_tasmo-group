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

const message = ref('');

const onSubmit = () => {
  console.log(message.value);
};
</script>
