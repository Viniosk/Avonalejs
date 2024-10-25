<!-- eslint-disable vue/multi-word-component-names -->
<!-- Login.vue -->
<template>
  <body>
  <div class="Login-container">
    <img src="http://avonale.com.br/wp-content/uploads/2023/09/LOGO_0_Poli_redimen.png" >
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

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('@/assets/back.jpg'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}

.Login-container {
  max-width: 400px;
  width: 100%; 
  padding: 2rem;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.362); 
}

.Login-container h1 {
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

input {
  width: 90%; 
  padding: 0.5rem;
  margin-top: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 8px;
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