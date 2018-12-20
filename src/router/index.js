import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import ApiList from '@/components/api/apiList'
import ApiAdd from '@/components/api/apiAdd'
import ApiUpdate from '@/components/api/apiUpdate'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/app',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/',
    	name: '首页',
    	component: Home
    },
    {
    	path: '/api/apiList',
    	name: '接口列表',
    	component: ApiList
    },
    {
    	path: '/api/apiAdd',
    	name: '接口新增',
    	component: ApiAdd
    },
    {
    	path: '/api/apiUpdate/:id',
    	name: '接口维护',
    	component: ApiUpdate
    }
  ]
})
