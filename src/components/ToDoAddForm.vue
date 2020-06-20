<template>
  <div class="to-do-form">
    <form v-on:submit.prevent="handleSubmit">
      <div class="title-form">
        <p class="title-label">Title: &nbsp;</p>
        <input :class="{'error-input': invalidTitle && triedSubmit, 'title-form-input': true}" id="title" v-model="newToDoText" type="text">
      </div>
      <div class="description-form">
        <p>Description</p>
        <br>
        <textarea :class="{'description-form-textarea':true, 'error-input':invalidDescription && triedSubmit, 'not-error-input': !invalidDescription}"  v-model="newToDoDescription">
    </textarea>
        <p v-if="invalidDescription && triedSubmit"> NO EMPTY SPACES!</p>
      </div>
      <button class="add-todo-button" v-on:submit="handleSubmit">Add todo</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "to-do-form",
    data() {
      return {
        newToDoText: "",
        newToDoDescription: "",
        error: false,
        triedSubmit: false

      }
    },
    methods: {
      handleSubmit() {
        this.triedSubmit =true;
        if (this.invalidTitle || this.invalidDescription){
          return
        }
        let newToDo = {text: this.newToDoText, description: this.newToDoDescription}
        console.log("I submit" + newToDo);
        this.$emit('add:new-todo', newToDo);
        this.newToDoText = "";
        this.newToDoDescription = ""
        this.clearStatus();
      },
      clearStatus() {
        this.triedSubmit = false
      }
    },
    computed: {
      invalidTitle() {
        return this.newToDoText === ''
      },
      invalidDescription() {
        return this.newToDoDescription === ''
      },
    //   titleInputClassName(){}
    //     return
    }
  }
</script>

<style>
  .title-form {
    display: flex;
    background: #F4F4F4;
    font-family: Happy Monkey;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    text-align: center;
  }

  .title-form p {
    margin-left: 10px;
    position: relative;
  }

  .title-form-input {
    margin-top: 16px;
    border-color: #F4F4F4;
    border: 0px;
    height: 1.5em;
    width: 50%;
    border-radius: 5px;
    position: absolute;
    right: 25%
  }

  .not-error-input{
    border: 1px solid #EAEAEA;
  }
  .error-input{
    border: 1px solid rgba(255, 19, 28, 0.64);
  }

  .to-do-form {
    margin-bottom: 25px;
    text-align: left;
    width: 344px;
    position: relative;
    margin-right: auto;
    margin-left: auto;
  }

  .description-form {
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #9E9E9E;
    margin-top: 16px;
    margin-left: 40px;
  }

  .description-form p {
    margin-bottom: 0px;
    padding-bottom: 0px;
  }

  .description-form-textarea {
    margin-top: 0px;
    padding-top: 0px;
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius: 5px;
    height: 100px;
    width: 95%;
  }

  .add-todo-button {
    background: #F96060;
    border-radius: 5px;
    border: 0px;
    font-family: Happy Monkey;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    padding-top: 13px;
    padding-bottom: 13px;
    margin-left: 10px;
    width: 295px;
    text-align: center;
    width: 100%;
    color: #FFFFFF;
    position: absolute;
    margin-top: 15px;
  }
</style>
