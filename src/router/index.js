// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/Home.vue';  // Corrigido para o caminho correto
import Login from '../components/Login.vue';      // Corrigido para o caminho correto
import Cadastro from '../components/Cadastro.vue';  // Corrigido para o caminho correto
import Dashboard from '../components/Dashboard.vue';  // Corrigido para o caminho correto

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/cadastro', component: Cadastro },
];

// Crie uma instância do roteador
const router = createRouter({
  history: createWebHistory(), // Use createWebHistory para Vue 3
  routes,
});

export default router;
