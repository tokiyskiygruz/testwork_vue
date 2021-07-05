import Vue from 'vue'
import VueRouter from 'vue-router'
import PageHome from '@/pages/PageHome'
import PageLogin from '@/pages/PageLogin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/Login',
    name: 'Login',
    component: PageLogin
  },

]

const router = new VueRouter({
  routes
})

export default router
