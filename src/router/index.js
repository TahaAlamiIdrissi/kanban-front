import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DevelopersList from '../views/DevelopersList'
import TasksList from '../views/TasksList'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/developers',
    name: 'DevelopersList',
    component: DevelopersList
  },
  {
    path: '/tasks',
    name: 'TasksList',
    component: TasksList
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
