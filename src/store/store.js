import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },

  getters: {
  },

  mutations: {
    removeToDo (state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    addToDo (state, newToDo) {
      state.todos = [newToDo, ...state.todos]
    },
    getToDos (state, data) {
      state.todos = data
    }
  },

  actions: {
    removeToDo (context, id) {
      axios({
        method: 'delete',
        url: `https://todo-list.ionagamed.ru/todos/${id}`,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(context.commit('removeToDo', id))
    },
    addToDo (context, newToDo) {
      axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        url: 'https://todo-list.ionagamed.ru/todos/',
        data: {
          projectId: '9Yp_ExY7WgmmPUL3XeOwn',
          title: newToDo.title,
          dueDate: '2011-10-10',
          description: newToDo.description
        }
      })
        .then((response) => {
          context.commit('addToDo', response.data)
        })
        .catch((e) => console.log(e.message))
    },
    getToDos (context) {
      axios.get('https://todo-list.ionagamed.ru/todos/?projectId=9Yp_ExY7WgmmPUL3XeOwn')
        .then((response) => {
          context.commit('getToDos', response.data)
          console.log(response.data)
        })
    },
    updateToDo (context, changedToDo) {
      axios({
        method: 'patch',
        url: `https://todo-list.ionagamed.ru/todos/${changedToDo.id}`,
        data: changedToDo
      })
    }
  }
})
