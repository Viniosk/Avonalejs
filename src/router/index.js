// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';      // Corrigido para o caminho correto
import Dashboard from '../components/Dashboard.vue';  // Corrigido para o caminho correto

const routes = [
  { path: '/', component: Login },
  { path: '/dashboard', component: Dashboard },
];

// Crie uma instância do roteador
const router = createRouter({
  history: createWebHistory(), // Use createWebHistory para Vue 3
  routes,
});

export default router;
