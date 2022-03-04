<template>
  <button class="message__status" @click="sendAgain">
    Нажмите, чтобы повторить отправку
    <svg class="message__status-icon status status--error">
      <use xlink:href="@/assets/img/sprite.svg#error" />
    </svg>
  </button>
</template>

<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['sendAgain']);

const sendAgain = () => {
  emit('sendAgain');
};
</script>
