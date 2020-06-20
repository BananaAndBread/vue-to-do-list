<template>
  <div class="content">
    <div class="to-do-wrapper">
      <to-do-add-form class="to-do-add-form" @add:new-todo="addNewToDo"/>
      <div class="to-do-list">
        <p class="title">To-do list</p>
        <table>
          <tbody>
          <tr>
            <to-do-element @change:todotext="changeTodoText" v-for ="todo in todos" v-bind:key="todo.id" v-bind:todotext = "todo"/>
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
  import ToDoElement from "./ToDoElement";
  import ToDoAddForm from "./ToDoAddForm";
  export default {
    name: "to-do-list",
    components: {ToDoElement, ToDoAddForm},
    mounted() {
      console.log('Mounted -------------------')
      console.log(this.todos)
    },
    updated() {
      console.log('Updated')
    },
    data(){
      return {
        todos : [{id: 0, text:"Something longer longer longer", checked: true, description: "Description 1"}, {id: 1, text:"Do something 2", checked: false, description: "Description 2"}, {id:2, text:"Do something 3", checked: false, description: "Description 3"}],
      }
    },
    methods: {
      changeTodoText(todotext){
        console.log("reached parent handler");
        for(let i=0; i<this.todos.length; i++){
          if (this.todos[i].id === todotext.id){
            this.todos[i] = todotext
          }
        }
      },
      countTasksDone(){
        let counter = 0;
        for(const todo of this.todos){
          if(todo.checked === true){
            counter+=1
          }
        }
        return counter
      },
      addNewToDo(newToDo){
        newToDo = {id: this.todos.length, text: newToDo.text, description: newToDo.description, checked: false}
        this.todos = [newToDo,...this.todos]
      }
    }
  }
</script>

<style scoped>

  table{
    width: 100%;
  }
  .to-do-list{
    margin-top: 30px;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(227, 227, 227, 0.5);
    max-width: 300px;
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
    max-width: 300px;
  }

  @media (max-width: 700px) {
    .to-do-list{
      display: flex;
      flex-direction: column;
    }
  }
    .to-do-wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;

    }
  @media (min-width: 700px) {
    .to-do-wrapper {
      display: grid;
      max-width: 1000px;
      grid-template-areas: "to-do-add-form to-do-elements";
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      grid-column-gap: 50px;
    }
    .to-do-list{
      margin-top: 0;
    }
    .content{
      display: flex;
      justify-content: center;
    }
    .title{
      padding-top: 0%;
    }
  }

</style>
