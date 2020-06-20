<template>
  <div class="edit-remove-form">
    <h1>{{toDoElement.text}}</h1>
    <hr>
    <h3>Description</h3>
    <p>{{toDoElement.description}}</p>

  </div>
</template>

<script>
  export default {
    data() {

    },
    props: {
      toDoElement: {}
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap');

  .edit-remove-form {
    padding-top: 25px;
  }

  .edit-remove-form h3 {
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
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
</style>
