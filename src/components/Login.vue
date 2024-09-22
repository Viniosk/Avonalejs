<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="Login-container">
        <h1>Login</h1>
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
            <button type="Login">Login</button>
        </form>
        <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
</template>

<script>
import { ref } from "vue";

export default{
    setup(){
        const email = ref("");
        const password = ref("");
        const errorMessage = ref("");

        const handleSubmit = () => {
            if (!email.value || !password.value){
                errorMessage.value = "Por favor preencha ambos os campos";
            }
            else{
                errorMessage.value = "";
                console.log("Email:", email.value);
                console.log("Password:", password.value);
            }
        };

        return{
            email,
            password,
            errorMessage,
            handleSubmit,
        };
    },
};
</script>

<style scoped>
.Login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 200px;
}

.form-group {
  margin-bottom: 1rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #358e6f;
}

p {
  color: red;
}
</style>