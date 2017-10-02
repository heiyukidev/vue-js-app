import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Admin from '@/components/Admin'
import Home from '@/components/front-office/Home'
import About from '@/components/front-office/About'
import Login from '@/components/front-office/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
      redirect: {name: 'home'},
      children: [
        {
          name: 'home',
          path: 'home',
          component: Home
        },
        {
          name: 'about',
          path: 'about',
          component: About
        },
        {
          name: 'login',
          path: 'login',
          component: Login
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {path: '*', redirect: {name: 'home'}}
  ]
})
