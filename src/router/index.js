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
          path: '/ModalDeployment',
          name: 'ModalDeployment',
          component: () => import('@/views/ModalDeployment'),
          children:[
            {
              path: '/chooseP4Compiler',
              name: 'chooseP4Compiler',
              component: () => import('@/components/ChooseP4Compiler')
            },
            {
              path: '/test2',
              name: 'createTopo',
              component: () => import('@/components/test2')
            }
          ]
        },
        {
          path: '/HomePage',
          name: 'HomePage',
          component: () => import('@/views/HomePage')
        },
      ],
      redirect:'ModalDeployment'
    },
    {
      // 会匹配所有路径
      path: '*',
      component: () => import('@/components/test'),
    }
  ]
})
