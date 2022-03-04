<template>
  <ul v-if="isLoaded" class="messages">
    <MessageItem
      v-for="msg in messages"
      :key="msg.created"
      :msg="msg"
      :is-author="msg.author === loggedUsername"
      :class="msg.author === loggedUsername ? 'message--send' : 'message--received'"
    >
    </MessageItem>
  </ul>
</template>

<script setup>
import MessageItem from '@/components/MessageListItem.vue';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const isLoaded = ref(false);
const messages = computed(() => store.state.messages);
const store = useStore();
const loggedUsername = store.state.username;

store.dispatch('fetchMessages').then(() => {
  isLoaded.value = true;
});
</script>
