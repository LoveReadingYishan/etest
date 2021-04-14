import Vue from 'vue'
import VueRouter from 'vue-router'
import Right from '@/page/right.vue'
import User from '@/page/User.vue'
/*import HelloWorld from '@/components//HelloWorld.vue'*/
Vue.use(VueRouter)
 
const routes = [{
    path:'/quanxian',
    name:'quanxian',
    component:Right
 },{
    path: '/user',
    name: 'user',
    component:User,
    childrens:[{}]
  }]

const router = new VueRouter({
  mode: 'history',
  routes,
  base: process.env.BASE_URL
  
})

export default router

/*
import Main from '@/components/Main'
import GaodeMap from '@/map/GaodeMap'
import Histogram from '@/charts/Histogram'
import HistogramTest from '@/charts/HistogramTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta:{
        keepalive:false
      }
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main,
      meta:{
        keepalive:true
      }
    },
    {
    path: '/',
    name: 'Home',
    component: HelloWorld,
    childrens:[]
  },
*/