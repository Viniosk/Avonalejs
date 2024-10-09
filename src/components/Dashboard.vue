<!-- src/components/Dashboard.vue -->
<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/avonalep.png" alt="Logo" />
    </div>
    <nav class="nav">
      <ul>
        <li><a href="#">Início</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Serviços</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  </header>

  <div class="Container">

    <div class="Container-tarefas1">

      1

  </div>

  <div class="Container-tarefas2">

    2

</div>
</div>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dashboard",
  mounted() {
      console.log("Componente Dashboard carregado!"); // Log para verificar o carregamento
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem 3rem;
  background-color: #0f4a8e;
  color: #ffffff;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 110px;
  margin-right: 15px;
}

.logo h1 {
  font-size: 1.8rem;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
}

.nav ul {
  list-style-type: none;
  display: flex;
  gap: 2rem;
  margin: 0;
}

.nav ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.nav ul li a:hover {
  color: #FFEB3B;
}

@media (max-width: 768px) {
  .nav ul {
    flex-direction: column;
    gap: 1rem;
  }
}

.Container{
  width: 600px;
  height: 400px;
  background: #0f4a8e;
  margin: 100px auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.Container-tarefas1{
  width: 100px;
  height: 100px;
  background: green;
  font-size: 2rem;
}

.Container-tarefas2{
  width: 100px;
  height: 100px;
  background: yellow;
  font-size: 2rem;
}

</style>