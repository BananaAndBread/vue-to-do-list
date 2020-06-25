import Home from './pages/Home'
import ToDoList from './pages/ToDoList'
import About from './pages/About'

const routes = [
  {
    path: '/todolist',
    component: ToDoList,
    name: 'ToDoList'
  },
  {
    path: '/',
    name: 'About',
    component: About
  }
]
export default routes
