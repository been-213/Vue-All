import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Todolist from "../pages/Todolist.vue"
import JSONP from "../pages/JSONP.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      Content: Home
    }
  },
  {
    path:'/todolist',
    name: 'todolist',
    components: {
      Content: Todolist
    }
  },
  {
    path:'/JSONP',
    name: 'JSONP',
    components: {
      Content: JSONP
    }
  },
  {
    path: '/Login',
    name: 'Login',
    components: {
      Content: Login
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
