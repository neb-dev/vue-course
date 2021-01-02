import { createApp } from 'vue';

import App from './App.vue';

import Friend from '../components/Friend.vue';

const app = createApp(App);

app.component('friend', Friend)

app.mount('#app');
