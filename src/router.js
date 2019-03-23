import Vue from 'vue'
import Router from 'vue-router'
import JsonTool from './views/JsonTool.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/JsonTool'
    },
    {
      path: '/JsonTool',
      name: 'JsonTool',
      component: JsonTool
    }
  ]
})
