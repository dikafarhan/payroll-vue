//import vue router
import { createRouter, createWebHistory } from 'vue-router'
//import store vuex
import store from '@/store'
//define a routes
const routes = [
    {
        path: '/register',
        name: 'register',
        component: () => import( /* webpackChunkName: "register" */ '@/views/auth/Register.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import( /* webpackChunkName: "login" */ '@/views/auth/Login.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () => import( /* webpackChunkName: "login" */ '@/views/User.vue'),
        //chek is loggedIn
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import( /* webpackChunkName: "login" */ '@/views/Dashboard.vue'),
        //chek is loggedIn
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/insertvegetable',
        name: 'vegetable',
        component: () => import( /* webpackChunkName: "login" */ '@/views/InputSayur.vue'),
        //chek is loggedIn
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/vegetable',
        name: 'Vegetablelist',
        component: () => import( /* webpackChunkName: "login" */ '@/views/Vegetablelist.vue'),
        //chek is loggedIn
        meta: {
            requiresAuth: true
        }
    },
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes // <-- routes
})

//define route for handle authentication
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        //cek nilai dari getters isLoggedIn di module auth
        if (store.getters['auth/isLoggedIn']) {
        next()
        return
      }
      next('/login')
    } else {
      next()
    }
  })

export default router