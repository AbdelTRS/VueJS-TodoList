import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [{
      id: 1,
      title: "Exemple de tâche",
    },
    ]
  },

  getters: {
    allTodos: (state) => state.todos,
  },

  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
      console.log(todo);
    },
    delete_todo(state, id) {
      state.todos = state.todos.filter(todo => todo.id != id);
    },
  },

  actions: {
    addTodo({ commit }, todo) {
      commit('add_todo', todo);
    },
    deleteTodo({ commit }, id) {
      commit('delete_todo', id);
    },
  },

  modules: {
  }
})
