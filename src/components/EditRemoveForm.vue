<template>
  <div class="edit-remove-form">
    <h1>{{toDoElement.text}}</h1>
    <hr>
    <form>
      <p>Name</p>
      <input type="text" v-model="toDoElement.text">
      <p>Description</p>
      <textarea v-model="toDoElement.description"/>
    </form>
    <div class="buttons-container">
    <Button @click.native="acceptChanges" v-bind:text="'Save'"></Button>
    <Button @click.native="deleteToDo" class="delete-button" v-bind:text="'Delete'"></Button>
    </div>
  </div>
</template>

<script>
  import Button from '@/components/Button'
  export default {
    data () {
      return {
        dataBeforeEdit: {},
        changesAccepted: false
      }
    },
    props: {
      toDoElement: {},
    },
    components: {
      Button
    },
    created () {
      this.saveState()
    },
    beforeDestroy () {
      console.log(this.changesAccepted)
      if (!this.changesAccepted) {
        this.cancelChanges()
      }
    },
    methods: {
      saveState () {
        console.log('saved state in form')
        this.dataBeforeEdit = Object.assign({}, this.toDoElement)
      },
      cancelChanges () {
        this.toDoElement.text = this.dataBeforeEdit.text
        this.toDoElement.description = this.dataBeforeEdit.description
      },
      acceptChanges () {
        console.log('Accept changes')
        this.changesAccepted = true
        this.$emit('closeModal')
      },
      deleteToDo () {
        this.$emit('passToParent', this.toDoElement.id)
        this.$emit('closeModal')
      }
    }
  }
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap");

  .edit-remove-form {
    padding-top: 25px;
  }

  .edit-remove-form h3 {
    font-family: Abel,serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 0.16px;
    color: #9A9A9A;
    text-align: left;
    margin-left: 15%;
  }

  .edit-remove-form h1 {
    font-family: "Happy Monkey", fantasy;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    text-align: left;
    margin-left: 15%;
  }

  .edit-remove-form p {
    text-align: left;
    margin-left: 15%;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  form p{
    color: #808080;
  }

  input, textarea{
    margin-left: 15%;
    /*border: 1px gray solid;*/
    width: 50%;
    padding: 0.5em;
    border: hidden;
    border-bottom: 1px rgba(203, 203, 203, 0.58) solid;
  }
  input{
    height: 2em;
  }
  textarea{
    height: auto;
  }

  hr{
    border-color: rgba(203, 203, 203, 0.58);
    width: 95%;
  }

  Button{
    min-width: 5em;
    width: 15%;
    margin-top: 3em;
  }

  Button:first-of-type{
    margin-left: 15%;
    margin-right: 1em;
  }
  .buttons-container{
  }

</style>
