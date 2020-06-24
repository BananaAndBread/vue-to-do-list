import Vue from 'vue'
import App from './App.vue'
import routes from './routes'
import VueRouter from 'vue-router'
import store from './store/store'

Vue.use(VueRouter)

const router = new VueRouter({ routes })

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
