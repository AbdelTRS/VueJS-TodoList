<template>
  <div>
    <div class="box">
      <div class="box-title">
        <ul>
          <li>{{ today }}</li>
          <li class="title-vuejs">{{ title }}</li>
          <li>{{ todos.length }} tâche(s)</li>
        </ul>
      </div>
      <NewTodo />
      <TodoList />
    </div>
  </div>
</template>

<script>
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";

import { mapState } from "vuex";

export default {
  components: {
    NewTodo,
    TodoList,
  },

  data() {
    return {
      title: "VueJS Tutorial Todo-list",
    };
  },

  computed: {
    ...mapState(["todos"]),

    today: function () {
      var todayDate = new Date();
      var frDays = [
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
      ];
      var frMonths = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Aout",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
      ];
      var month = frMonths[todayDate.getMonth()];
      var day = frDays[todayDate.getDay()];
      var date = todayDate.getDate();
      return day + " " + date + " " + month;
    },
  },
};
</script>

<style>
.box-title {
  background-color: #ffffff;
  width: 100%;
  margin: 0 0 20px 0;
  padding: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
ul {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  font-weight: 600;
}
.title-vuejs {
  font-weight: 800;
  color: #03d2b3;
}
</style>