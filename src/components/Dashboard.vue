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

  <br><br><br><br>

  <div class="container-tarefas">
    <div class="container">
      <div class="column" v-for="tarefa in tarefas" :key="tarefa.id" draggable="true">
        <div class="item" :class="{ urgente: tarefa.urgente }" draggable="true">
          <h3>{{ tarefa.titulo }}</h3>
          <p>{{ tarefa.descricao }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dashboard",
  data() {
    return {
      tarefas: [
        { id: 1, titulo: "Lavar a louça", descricao: "Lavar toda a louça acumulada após o almoço", urgente: false },
        { id: 2, titulo: "Enviar relatório", descricao: "Finalizar e enviar o relatório para a equipe", urgente: true },
        { id: 3, titulo: "Organizar escritório", descricao: "Arrumar papéis e itens desorganizados na mesa de trabalho", urgente: false },
        { id: 4, titulo: "Estudar para a prova", descricao: "Revisar os temas para a prova de amanhã", urgente: true },
      ],
    };
  },
  mounted() {
    console.log("Componente Dashboard carregado!");

    const columns = document.querySelectorAll(".column");

    document.addEventListener("dragstart", (e) => {
      e.target.classList.add("dragging");
    });

    document.addEventListener("dragend", (e) => {
      e.target.classList.remove("dragging");
    });

    columns.forEach((column) => {
      column.addEventListener("dragover", (e) => {
        e.preventDefault();
        const dragging = document.querySelector(".dragging");
        const applyAfter = this.getNewPosition(column, e.clientY);
        if (applyAfter) {
          applyAfter.insertAdjacentElement("afterend", dragging);
        } else {
          column.prepend(dragging);
        }
      });
    });
  },
  methods: {
    getNewPosition(column, posY) {
      const items = column.querySelectorAll(".item:not(.dragging)");
      let result = null;
      items.forEach((item) => {
        const box = item.getBoundingClientRect();
        const boxCenterY = box.top + box.height / 2;
        if (posY >= boxCenterY) {
          result = item;
        }
      });
      return result;
    },
  },
};
</script>

<style scoped>
.header {
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem 3rem;
  background: linear-gradient(34deg, rgba(15,109,103,1) 3%, rgba(29,201,211,1) 51%);
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

.container {
  display: flex;
  justify-content: center;
  min-height: 400px;
  gap: 50px; 
  padding: 20px;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: rgb(18, 206, 215);
  width: 300px; 
  min-height: 500px; 
  border-radius: 5px;
}

.item {
  background-color: rgb(255, 255, 255);
  padding: 10px;
  border-radius: 5px;
}

.dragging {
  opacity: 0.6;
}

.urgente {
  background-color: rgb(221, 44, 44);
}
</style>
