import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const Detail = ()=> import(/* webpackChunkName: 'detail' */ '../views/DetailPage.vue')


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
  path: '/country/:country',
  name: 'Detail',
  component: Detail
},

 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
