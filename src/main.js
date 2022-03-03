import { createApp } from 'vue';
import { store } from '@/store';
import App from './App.vue';

import '@/assets/sass/main.sass';

const app = createApp(App);

app.use(store).mount('#app');
