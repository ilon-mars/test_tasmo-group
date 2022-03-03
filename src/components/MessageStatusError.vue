<template>
  <button class="message__status" @click="sendAgain">
    Нажмите, чтобы повторить отправку
    <svg class="message__status-icon status status--error">
      <use xlink:href="@/assets/img/sprite.svg#error" />
    </svg>
  </button>
</template>

<script setup>
const sendAgain = () => {
  console.log('send again');
};
</script>
