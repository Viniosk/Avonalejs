// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Importe o roteador

// Crie a aplicação e use o roteador
createApp(App)
  .use(router)  // Adicione o roteador
  .mount('#app');
