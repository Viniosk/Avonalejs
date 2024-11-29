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

  <body>
    <div class="container-tarefas">
      <div class="container">
        <!-- Adicionando títulos para as colunas -->
        <div 
          class="column" 
          v-for="(coluna, index) in colunas" 
          :key="index" 
          @dragover.prevent="onDragOver($event, index)" 
          @drop="onDrop($event, index)"
        >
          <!-- Títulos baseados na posição das colunas -->
          <h2 class="column-title" v-if="index === 0">Iniciar</h2>
          <h2 class="column-title" v-else-if="index === 1">Em processo</h2>
          <h2 class="column-title" v-else>Finalização</h2>

          <!-- Lista de tarefas dentro da coluna -->
          <div 
            class="item" 
            v-for="(tarefa, tarefaIndex) in coluna" 
            :key="tarefa.id" 
            :class="{ urgente: tarefa.urgente }" 
            draggable="true" 
            @dragstart="onDragStart(tarefa, index)"
          >
            <div class="task-header">
              <h3 class="task-title">{{ tarefa.titulo }}</h3>
              <div class="task-actions">
                <button class="edit-btn" @click="confirmEdit(tarefa, index, tarefaIndex)">
                  ✏️
                </button>
                <button class="delete-btn" @click="confirmDelete(index, tarefaIndex)">
                  🗑️
                </button>
              </div>
            </div>
            
            <p class="task-description">{{ tarefa.descricao }}</p>
            
            <div class="importance">
              <span>Importância:</span>
              <select v-model="tarefa.importancia">
                <option value="alta">Alta</option>
                <option value="media">Média</option>
                <option value="baixa">Baixa</option>
              </select>
            </div>
          </div>

          <!-- Botão para adicionar tarefa -->
          <button class="add-task-btn" @click="toggleForm(index)">+</button>

          <!-- Formulário para adicionar nova tarefa -->
          <div v-if="formVisible === index" class="add-task-form">
            <input 
              v-model="novaTarefa.titulo" 
              type="text" 
              placeholder="Título" 
              class="task-input"
            />
            <textarea 
              v-model="novaTarefa.descricao" 
              placeholder="Descrição" 
              class="task-input"
            ></textarea>
            <div class="importance">
              <span>Importância:</span>
              <select v-model="novaTarefa.importancia">
                <option value="alta">Alta</option>
                <option value="media">Média</option>
                <option value="baixa">Baixa</option>
              </select>
            </div>
            <button @click="adicionarTarefa(index)">Adicionar</button>
            <button @click="toggleForm(null)">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>


<script>
// const { getTarefas } = require("../http-common");

// console.log(await getTarefas());

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dashboard",
  data() {
    return {
      colunas: [
        [
          { id: 1, titulo: "Edição do Front", descricao: "Terminar de estilizar front-end a page do dashboard.", urgente: false, },
          { id: 2, titulo: "Enviar relatório", descricao: "Finalizar e enviar o relatório para toda a equipe.", urgente: true, },
        ],
        [
          { id: 3, titulo: "Atualização de Funções", descricao: "Teste as funções que foram adicionadas a page do login.", urgente: false, },
        ],
        [
          { id: 4, titulo: "Teste a Conectividade", descricao: "Verificar se o back-end esta conseguindo se conectar corretamente ao banco.", urgente: true, },
        ],
      ],
      formVisible: null,
      novaTarefa: { titulo: "", descricao: "", importancia: "baixa" },
      tarefaAtual: null,
      colunaOrigem: null,
    };
  },
  methods: {
    toggleForm(index) {
      this.formVisible = this.formVisible === index ? null : index;
      if (this.formVisible === null) {
        this.novaTarefa = { titulo: "", descricao: "", importancia: "baixa" };
      }
    },
    adicionarTarefa(index) {
      if (!this.novaTarefa.titulo.trim() || !this.novaTarefa.descricao.trim()) {
        alert("Preencha o título e a descrição da tarefa.");
        return;
      }

      this.colunas[index].push({
        id: Date.now(),
        titulo: this.novaTarefa.titulo,
        descricao: this.novaTarefa.descricao,
        urgente: false,
        importancia: this.novaTarefa.importancia,
      });

      this.novaTarefa = { titulo: "", descricao: "", importancia: "baixa" };
      this.formVisible = null;
    },
    onDragStart(tarefa, colunaIndex) {
      this.tarefaAtual = tarefa;
      this.colunaOrigem = colunaIndex;
    },
    // eslint-disable-next-line no-unused-vars
    onDragOver(event, colunaIndex) {
      event.preventDefault();
    },
    onDrop(event, colunaIndex) {
      if (this.colunaOrigem === colunaIndex) return;

      this.colunas[this.colunaOrigem] = this.colunas[this.colunaOrigem].filter(
        (tarefa) => tarefa.id !== this.tarefaAtual.id
      );

      this.colunas[colunaIndex].push(this.tarefaAtual);

      this.tarefaAtual = null;
      this.colunaOrigem = null;
    },
    confirmDelete(colunaIndex, tarefaIndex) {
      const confirmacao = confirm("Você quer excluir essa tarefa?");
      if (confirmacao) {
        this.colunas[colunaIndex].splice(tarefaIndex, 1);
      }
    },
    confirmEdit(tarefa, colunaIndex, tarefaIndex) {
      const confirmacao = confirm("Você gostaria de editar essa tarefa?");
      if (confirmacao) {
        const novoTitulo = prompt("Novo título:", tarefa.titulo) || tarefa.titulo;
        const novaDescricao =
          prompt("Nova descrição:", tarefa.descricao) || tarefa.descricao;
        const novaImportancia =
          prompt("Novo nível de importância (alta, media, baixa):", tarefa.importancia) || tarefa.importancia;
        this.colunas[colunaIndex][tarefaIndex] = {
          ...tarefa,
          titulo: novoTitulo,
          descricao: novaDescricao,
          importancia: novaImportancia,
        };
      }
    },
  },
};
</script>

<style scoped>

.column-title {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #fff;
  font-weight: bold;
}


/* Estilo do cabeçalho */
.header {
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem 3rem;
  background: linear-gradient(34deg, rgba(15, 109, 103, 1) 3%, rgba(29, 201, 211, 1) 51%);
  color: #ffffff;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.logo img {
  max-height: 120px;
  max-width: 100%;
}

.nav ul {
  list-style-type: none;
  display: flex;
  gap: 2rem;
  margin: 0;
}

.nav ul li a {
  color: #ffffff;
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

/* Estilo das colunas e tarefas */
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
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-actions button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.task-title {
  white-space: normal;
  word-wrap: break-word;
  font-size: 1rem;
  font-weight: bold;
}

.task-description {
  font-size: 0.9rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.importance {
  margin-top: 10px;
  font-size: 0.9rem;
}

.importance select {
  padding: 4px 8px;
  font-size: 0.9rem;
  margin-left: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
}

.add-task-btn {
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.5rem;
}

.add-task-btn:hover {
  background-color: #45a049;
}
</style>
