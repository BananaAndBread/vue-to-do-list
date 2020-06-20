<template>
  <div>
    <to-do-add-form @add:new-todo="addNewToDo"/>
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
      <p class="alert" v-if="countTasksDone()===1"> You have done {{countTasksDone()}} ToDo already!</p>
      <p class="alert" v-if="countTasksDone()===0"> You have not done anything yet!</p>
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
        todos : [{id: 0, text:"Do something 1", checked: true, description: "Description 1"}, {id: 1, text:"Do something 2", checked: false, description: "Description 2"}, {id:2, text:"Do something 3", checked: false, description: "Description 3"}],
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
    margin-top: 100px;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(227, 227, 227, 0.5);
    width: 400px;
  }

  .title{
    text-align: left;
    font-family: Happy Monkey;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #9A9A9A;
    margin-left: 20px;
    text-transform: uppercase;
    padding-top: 24px;
  }

  .alert{
    padding-bottom: 15px;
    vertical-align: middle;
    font-family: Happy Monkey;
    font-size: 14px;
    margin-left: 10%;

  }
</style>
