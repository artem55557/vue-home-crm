import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router ({

  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {layout: 'Main'},
      component: () => import('./views/Dashboard.vue')
    },
    {
      path: '/bills',
      name: 'Bills',
      meta: {layout: 'main'},
      component: () => import('./views/Bills.vue')
    },
    {
      path: '/bill',
      name: 'Bill',
      meta: {layout: 'main'},
      component: () => import('./views/Bill.vue')
    },
    {
      path: '/category',
      name: 'Category',
      meta: {layout: 'main'},
      component: () => import('./views/Category.vue')
    },
    {
      path: '/createbill',
      name: 'Createbill',
      meta: {layout: 'main'},
      component: () => import('./views/Createbill.vue')
    },
    {
      path: '/history',
      name: 'History',
      meta: {layout: 'main'},
      component: () => import('./views/History.vue')
    },
    {
      path: '/record',
      name: 'Record',
      meta: {layout: 'main'},
      component: () => import('./views/Record.vue')
    },
    {
      path: '/settings',
      name: 'Settings',
      meta: {layout: 'main'},
      component: () => import('./views/Settings.vue')
    },
    {
      path: '/login',
      name: 'Login',
      meta: {layout: 'empty'},
      component: () => import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'Rregister',
      meta: {layout: 'empty'},
      component: () => import('./views/Register.vue')
    }
  ]
})

export default router