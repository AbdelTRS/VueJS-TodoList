<template>
  <div>
    <div v-for="todo in allTodos" :key="todo.id">
      <div class="todo-item">
        <h3>{{ todo.title }}</h3>
        <button
          @click="deleteTodo(todo.id)"
          class="button is-danger is-rounded"
        >
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  props: {
    todo: {},
  },

  data() {
    return {
      todoText: "",
      editing: false,
    };
  },

  methods: {
    ...mapActions(["deleteTodo"]),
    todoTextChange(e) {
      this.todoText = e.targetvalue;
    },
  },

  computed: {
    ...mapGetters(["allTodos"]),
  },
};
</script>

<style>
.todo-item {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 20px;
}
</style>