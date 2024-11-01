<!-- src/components/Dashboard.vue -->
<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/avonalep.png" alt="Logo" />
    </div>
    <nav class="nav">
      <ul>
        <li><a href="/">Início</a></li>
      </ul>
    </nav>
  </header>

  <div class="Container">

    <div class="Container-tarefas">

      <div class="Titulo">
        Pendentes
        <ul class="tarefas">
          <li>Tarefa 1</li>
          <li>Tarefa 2</li>
          <li>Tarefa 3</li>
        </ul>
      </div>

    </div>

    <div class="Container-tarefas">

      <div class="Titulo">
        Em execução
        <ul class="tarefas">
          <li>Tarefa 1</li>
          <li>Tarefa 2</li>
          <li>Tarefa 3</li>
        </ul>
      </div>
      

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
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem 3rem;
  background: rgb(15,109,103);
  background: linear-gradient(34deg, rgba(15,109,103,1) 3%, rgba(29,201,211,1) 51%, rgba(29,201,211,1) 100%);
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
  width: 1000px;
  height: 530px;
  background: rgb(15,109,103);
  background: linear-gradient(34deg, rgba(15,109,103,1) 3%, rgba(29,201,211,1) 51%, rgba(29,201,211,1) 100%);
  margin: 100px auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
}

.Container-tarefas{
  width: 400px;
  height: 350px;
  background: rgb(255, 255, 255);
  font-size: 2rem;
  display: flex;
  justify-content: center;
}


.Titulo{
  font-size: 2.1rem;
  font-style: italic;
  font-family: 'Lato', sans-serif;
  margin-top: 20px;
}

.tarefas{
  list-style-type: none;
  padding: 0;
  margin-top: 30px;
}

</style>