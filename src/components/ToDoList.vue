<template>
  <div class="content">
    <div class="to-do-wrapper">
      <to-do-add-form class="to-do-add-form" @add:new-todo="addNewToDo"/>
      <div class="to-do-list">
        <p class="title">To-do list</p>
        <table>
          <tbody>
          <tr>
            <to-do-element @change:todoelement="changeTodoText" v-for ="todo in todos" v-bind:key="todo.id" v-bind:todoelement = "todo"/>
          </tr>
          </tbody>
        </table>
        <p class="alert" v-if="countTasksDone()!==0 && countTasksDone()!==1"> You have done {{countTasksDone()}} ToDos already!</p>
        <p class="alert" v-else-if="countTasksDone()===1"> You have done {{countTasksDone()}} ToDo already!</p>
        <p class="alert" v-else> You have not done anything yet!</p>
      </div>
    </div>
  </div>
</template>

<script>
  import ToDoElement from './ToDoElement'
  import ToDoAddForm from './ToDoAddForm'
  export default {
    name: 'to-do-list',
    components: { ToDoElement, ToDoAddForm },
    mounted () {
      console.log('Mounted -------------------')
      console.log(this.todos)
    },
    updated () {
      console.log('Updated')
    },
    data () {
      return {
        todos: [{ id: 0, text: 'Something longer longer longer', checked: true, description: 'Description 1' }, { id: 1, text: 'Do something 2', checked: false, description: 'Description 2' }, { id: 2, text: 'Do something 3', checked: false, description: 'Description 3' }]
      }
    },
    methods: {
      changeTodoText (todotext) {
        console.log('reached parent handler')
        for (let i = 0; i < this.todos.length; i++) {
          if (this.todos[i].id === todotext.id) {
            this.todos[i] = todotext
          }
        }
      },
      countTasksDone () {
        let counter = 0
        for (const todo of this.todos) {
          if (todo.checked === true) {
            counter += 1
          }
        }
        return counter
      },
      addNewToDo (newToDo) {
        newToDo = { id: this.todos.length, text: newToDo.text, description: newToDo.description, checked: false }
        this.todos = [newToDo, ...this.todos]
      }
    }
  }
</script>

<style scoped>

  table{
    width: 100%;
  }
  .to-do-list{
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(227, 227, 227, 0.5);
    width: 100%;
  }

  .title{
    text-align: left;
    font-family: Happy Monkey,fantasy;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    color: #9A9A9A;
    margin-left: 10%;
    text-transform: uppercase;
    padding-top: 10%;
  }

  .alert{
    padding-bottom: 1%;
    font-family: Happy Monkey,fantasy;
    font-size: 1em;
    margin-left: 10%;

  }
  .to-do-add-form {
    margin-top: 0;
  }

  @media (max-width: 700px) {
    .to-do-list{
      display: flex;
      flex-direction: column;
      max-width: 550px;
    }
  }
    .to-do-wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .to-do-add-form{
      max-width: 500px;
    }
  @media (min-width: 700px) {
    .to-do-wrapper {
      display: grid;
      grid-template-areas: "to-do-add-form to-do-elements .";
      grid-template-columns: 1fr 1.5fr 0.25fr;
      grid-template-rows: 1fr;
      align-items: start;
      grid-column-gap: 50px;
      justify-content: start;
      max-width: 1500px;
    }
    .to-do-add-form{
      grid-area: to-do-add-form;
    }
    .to-do-list{
      grid-area: to-do-elements;
      margin-top: 0;
    }
    .content{
      margin-left: 30px;
    }
    .title{
      padding-top: 0;
    }
  }

</style>
