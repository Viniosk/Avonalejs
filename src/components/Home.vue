<template>
    <body>
        <div class="home-container">
          <img src="http://avonale.com.br/wp-content/uploads/2023/09/LOGO_0_Poli_redimen.png" >
          <br><br><br>
            <div class="bt-container">
                <button @click="login">Login</button>
            </div>
            <div class="bt-container">
                <button @click="cadastro">Cadastro</button>
            </div>
        </div>
    </body>
</template>

<script>
export default {
    name: 'HomePage',
    methods: {
    login() {
        this.$router.push('/login');
    },
    cadastro() {
        this.$router.push('/cadastro');
    },
}

}
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

.home-container {
  max-width: 400px;
  width: 100%; 
  padding: 2rem;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.423); 
}

.home-container h1 {
  text-align: center;
  margin-bottom: 70px;
}

.bt-container {
  margin-bottom: 2rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  justify-content: center;
  display: flex;
  height: 50px;
}

button:hover {
    background-color: #2c8e6b;
    cursor: pointer;

}

button {
  width: 90%; 
  padding: 0.5rem;
  margin-top: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #42b983;
  color: white;
}

</style>