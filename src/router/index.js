import Vue from 'vue'
import VueRouter from 'vue-router'
import Thread from '../views/Thread.vue'
import Sub from '../views/Sub.vue'
import Home from '../views/Home.vue'
import CreateSub from '../views/CreateSub.vue'
import CreateThread from '../views/CreateThread.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/sub',
        name: 'Sub',
        component: Sub
    },
    {
        path: '/thread',
        name: 'Thread',
        component: Thread
    },
    {
        path: '/createsub',
        name: 'Create Sub',
        component: CreateSub
    },
    {
        path: '/createthread',
        name: 'Create Thread',
        component: CreateThread
    },
]

const router = new VueRouter({
    routes
})

export default router
