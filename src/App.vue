<template>
  <div id="app">
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
  margin-left: auto;
  margin-right: auto;
}
</style>
