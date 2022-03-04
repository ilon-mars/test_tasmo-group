<template>
  <li class="message">
    <p class="message__body">{{ props.msg.text }}</p>
    <span v-if="!props.isAuthor" class="message__author">{{ props.msg.author }}</span>
    <component :is="msgStatusComponent" @sendAgain="resend(props.msg)"></component>
  </li>
</template>

<script setup>
import MessageStatusLoading from '@/components/MessageStatusLoading.vue';
import MessageStatusError from '@/components/MessageStatusError.vue';
import MessageStatusSuccess from '@/components/MessageStatusSuccess.vue';
import { computed, defineProps } from 'vue';
import { useStore } from 'vuex';

const statusComponents = {
  loading: MessageStatusLoading,
  error: MessageStatusError,
  success: MessageStatusSuccess,
};

const msgStatusComponent = computed(() => statusComponents[props.msg.status]);
const store = useStore();

const resend = msg => {
  store.dispatch('resendMessage', msg);
};

const props = defineProps({
  msg: {
    type: Object,
    default: () => {},
  },
  isAuthor: {
    type: Boolean,
    default: false,
  },
});
</script>
