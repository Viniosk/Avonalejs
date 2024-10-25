<template>
    <body>
        <div class="cadastro-container">
        <h1>CADASTRO</h1>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" v-model="form.nome" placeholder="Digite seu nome" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="form.email" placeholder="Digite seu e-mail" required>
            </div>
            <div class="form-group">
                <label for="senha">Senha:</label>
                <input type="password" 
                id="password" 
                v-model="password" 
                placeholder="Digite sua senha" required>
                
            </div>
            <button type="submit">Cadastrar</button>
        </form>
        </div>
    </body>
</template>

<script>
// eslint-disable-next-line vue/multi-word-component-names
export default {
    name: 'CADASTRO',
    data() {
        return {
            form: {
                nome: '',
                email: '',
                senha: ''
            }
        };
    },
    methods: {
        submitForm() {
            // Handle form submission
        }
    }
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

.cadastro-container {
  max-width: 400px;
  width: 100%; 
  padding: 2rem;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.423); 
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
  width: 100%;
  margin-top: 2rem; 
  padding: 0.75rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
}

.cadastro-container h1 {
  text-align: center;
}

</style>