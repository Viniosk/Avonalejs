<!-- eslint-disable vue/multi-word-component-names -->
<!-- Login.vue -->
<template>
  <body>
  <div class="Login-container">
      <h1>Avonale</h1>
      <form @submit.prevent="handleSubmit">
          <div class="form-group">
              <label for="email">Email:</label>
              <input 
              type="email"
              id="email"
              v-model="email"
              placeholder="Digite seu e-mail"
              />
          </div>
          <div class="form-group">
              <label for="password">Senha:</label>
              <input 
              type="password"
              id="password"
              v-model="password"
              placeholder="Digite sua senha"
              /> 
          </div>
          <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</body>
</template>


<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
setup() {
  const email = ref("");
  const password = ref("");
  const errorMessage = ref("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!email.value || !password.value) {
      errorMessage.value = "Por favor, preencha ambos os campos";
    } 
    // Simulação de login com email e senha fixos (admin/admin)
    else if (email.value === 'teste@exemplo.com' && password.value === 'teste') {
      errorMessage.value = "";
      console.log("Login bem-sucedido!");
      errorMessage.value = "";
      // Redireciona para o Dashboard após o login bem-sucedido
      router.push('/dashboard'); 
    } 
    else {
      errorMessage.value = "Credenciais incorretas!";
      console.log("Email:", email.value);
      console.log("Password:", password.value);
    }
  };

  return {
    email,
    password,
    errorMessage,
    handleSubmit,
  };
},
};
</script>

<style scoped>

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  overflow: hidden;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(''); 
  background: linear-gradient(to bottom right, #a4f1f6, #06bc9b);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
}

.Login-container {
  max-width: 400px;
  width: 100%; 
  padding: 2rem;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.8); 
}

.Login-container h1 {
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
}

input {
  width: 90%; 
  padding: 0.5rem;
  margin-top: 0.25rem;
}

button {
  width: 60%; 
  padding: 0.75rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 1rem auto 0; 
  display: block;
}

button:hover {
  background-color: #358e6f;
}

p {
  color: red;
  text-align: center;
  font-weight: bold;
}

</style>