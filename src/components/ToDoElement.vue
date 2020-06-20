<template>
  <div>
    <div class="to-do-element">
      <span class="round">
        <input :id="todotext.id" type="checkbox" v-model="todotext.checked" v-on:change="handleCheck">
        <label :for="todotext.id"></label>
      </span>
      <span class="todotext">
      <p>{{todotext.text}} &nbsp</p>
      </span>
      <button v-on:click="openModal">More</button>

    </div>
    <modal @close:modal="closeModal" v-bind:todoelement="todotext" v-show="modalOpen"></modal>
  </div>
</template>

<script>
  import Modal from "./Modal";

  export default {
    name: "to-do-element",
    props: {
      todotext: [],
    },
    data() {
      return {
        modalOpen: false
      }
    },
    methods: {
      handleCheck() {
        console.log(this.todotext.id + 'tick checked ' + this.todotext.checked.toString())
        this.$emit('change:todotext', this.todotext)
      },
      openModal() {
        this.modalOpen = true
      },
      closeModal() {
        this.modalOpen = false
      }
    },
    components: {
      Modal
    }

  }
</script>

<style scoped>
  .to-do-element {
    background: #FFFFFF;
    box-shadow: 5px 5px 9px rgba(224, 224, 224, 0.5);
    /*border: 0.5px #4d4d4d;*/
    display: flex;
    margin: 16px;
    position: relative;
  }

  .to-do-element:first-of-type {
    margin-top: -1px;
  }

  .round {
    position: relative;
    /*vertical-align: middle;*/
    margin-top: 27px;
    margin-left: 25px;
    margin-bottom: 27px;
  }

  .round label {
    background-color: #fff;
    border: 1px solid #6074F9;
    border-radius: 50%;
    cursor: pointer;
    height: 28px;
    left: 0;
    position: absolute;
    top: 0;
    width: 28px;
  }

  .round label:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    left: 7px;
    opacity: 0;
    position: absolute;
    top: 8px;
    transform: rotate(-45deg);
    width: 12px;
  }

  .round input[type="checkbox"] {
    visibility: hidden;
  }

  .round input[type="checkbox"]:checked + label {
    background-color: #F96060;;
    border-color: #F96060;;
  }

  .round input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }

  .to-do-element p {
    margin-left: 64px;
    margin-top: 13px;
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    horiz-align: right;

  }

  .to-do-element button {
    position: absolute;
    right: 0;
    height: 100%;
    background: #F96060;
    border: 0px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    font-family: Happy Monkey;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    padding-left: 10px;
    /* identical to box height */
    padding-right: 10px;
    width: 5em;
    color: #FFFFFF;
  }
</style>
