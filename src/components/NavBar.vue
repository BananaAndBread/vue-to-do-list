<template>
  <header class="header">
    <nav class="nav">
      <div class="big-screen-nav">
        <span class="nav__link" v-bind:key="linkName.id" v-for="linkName of linkNames">
        <router-link :to="{name: linkName.value}">{{linkName.value}}</router-link>
        </span>
      </div>
      <div class="small-screen-nav">
        <NavBarIcon class="svg-nav-bar"/>
      </div>
    </nav>
  </header>
</template>
<script>
  import NavBarIcon from '../assets/nav-bar-icon.svg'

  export default {
    name: 'nav-bar',
    components: {
      NavBarIcon
    },
    data () {
      return {
        linkNames: [{ id: 1, value: 'Home' }, { id: 2, value: 'ToDoList' }, { id: 3, value: 'About' }]
      }
    }
  }
</script>
<style scoped>
  .nav {
    border: 1px solid #F96060;
    background: #F96060;
    border-radius: 5px;
    display: flex;
    padding-top: 5px;
    padding-bottom: 5px;

  }

  .nav__link {
    margin-left: 5px;
    margin-right: 5px;
    border-right: white 1px solid;
    height: 100%;
    font-size: 1.5em;
    padding-right: 5px;

  }

  .svg-nav-bar {
    width: 50%;
    height: auto;
  }

  .nav__link a {
    color: white;
  }

  @media (max-width: 700px) {
    .big-screen-nav {
      display: none;
    }

    .nav {
      justify-content: flex-end;
    }
  }

  @media (min-width: 700px) {
    .small-screen-nav {
      display: none;
    }
  }
</style>
