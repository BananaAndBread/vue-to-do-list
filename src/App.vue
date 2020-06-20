<template>
  <div id="app">
    <nav>
      <router-link to="/todolist">To do list</router-link>
    </nav>
    <to-do-list></to-do-list>
  </div>
</template>

<script>
import ToDoList from "./components/ToDoList";

export default {
  name: 'app',
  components: {ToDoList},
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.to-do-list{
}
</style>
