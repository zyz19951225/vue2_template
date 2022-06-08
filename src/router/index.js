import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)



export default new Router({

  routes: [
    {
      name: 'index',
      path: '/',
      component: () => import('@/layout/index'),
      children:[
        {
          path: '/chooseP4Compiler',
          name: 'chooseP4Compiler',
          component: () => import('@/components/chooseP4Compiler.vue')
        },
        {
          path: '/test2',
          name: 'createTopo',
          component: () => import('@/components/test2.vue')
        }
      ],
    },
    {
      // 会匹配所有路径
      path: '*',
      component: () => import('@/components/test'),
    }
  ]
})
