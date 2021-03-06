<template>
  <div>
    <div class="input">
      <input
        @change="todoTextChange"
        v-bind:value="todoText"
        class="input is-primary"
        type="text"
        placeholder="Nouvelle tâche"
      />
      <button @click="addTodoI" class="button is-success is-rounded">
        <i class="fas fa-plus"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";

export default {
  data() {
    return {
      todoText: "",
    };
  },

  methods: {
    ...mapActions(["addTodo"]),

    todoTextChange(e) {
      this.todoText = e.target.value;
    },

    addTodoI() {
      this.addTodo({
        title: this.todoText,
        id: v1(),
      });
      this.todoText = "";
    },
  },
};
</script>

<style>
.input {
  box-shadow: none;
}

.input:first-child {
  margin-right: 50px;
}
.input:hover {
  outline: none;
  border: none;
}

.input,
.select select,
.textarea {
  border-color: transparent;
}
</style>