<template>
  <ul class="messages">
    <MessageItem class="message--send"
      ><template #status><MessageStatusError /></template
    ></MessageItem>
    <MessageItem class="message--send"
      ><template #status><MessageStatusLoading /></template
    ></MessageItem>
    <MessageItem class="message--send"
      ><template #status><MessageStatusSuccess /></template
    ></MessageItem>
    <MessageItem class="message--received">
      <template #author><span class="message__author">Author name</span></template>
    </MessageItem>
  </ul>
</template>

<script setup>
import MessageItem from '@/components/MessageListItem.vue';
import MessageStatusLoading from '@/components/MessageStatusLoading.vue';
import MessageStatusError from '@/components/MessageStatusError.vue';
import MessageStatusSuccess from '@/components/MessageStatusSuccess.vue';
</script>
