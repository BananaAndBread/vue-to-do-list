import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 0,
        text: 'Something longer longer longer',
        checked: true,
        description: 'Description 1'
      },
      {
        id: 1,
        text: 'Do something 2',
        checked: false,
        description: 'Description 2'
},
      {
        id: 2,
        text: 'Do something 3',
        checked: false,
        description: 'Description 3'
      }]
  },

  getters: {
  },

  mutations: {
    removeToDo (state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    addToDo (state, newToDo) {
      newToDo = { id: state.todos.length, text: newToDo.text, description: newToDo.description, checked: false }
      state.todos = [newToDo, ...state.todos]
    },
    getToDos (state) {
    }
  },

  actions: {
    removeToDo (context, id) {
      context.commit('removeToDo', id)
    },
    addToDo (context, newToDo) {
      context.commit('addToDo', newToDo)
    },
    getToDos (context) {
      context.commit('getToDos')
    }
  }
})
