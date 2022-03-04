<template>
  <main class="container">
    <MessageList />
    <MessageForm />
  </main>

  <AppOverlay v-if="!isUserLogged" />
</template>

<script setup>
import MessageForm from '@/components/MessageForm.vue';
import MessageList from '@/components/MessageList.vue';
import AppOverlay from '@/components/AppOverlay.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const isUserLogged = computed(() => !!store.state.username);
</script>
