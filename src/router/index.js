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
              path: '/createTopo',
              name: 'createTopo',
              component: () => import('@/components/CreateTopo')
            },
            {
              path: '/compiledP4',
              name: 'compiledP4',
              component: () => import('@/components/CompiledP4')
            },
            {
              path: '/startP4',
              name: 'startP4',
              component: () => import('@/components/StartP4')
            },
            {
              path: '/compiledONOS',
              name: 'compiledONOS',
              component: () => import('@/components/CompiledONOS')
            },
            {
              path: '/ONOSLoadApp',
              name: 'ONOSLoadApp',
              component: () => import('@/components/ONOSLoadApp')
            },
            {
              path: '/StartTheApplication',
              name: 'StartTheApplication',
              component: () => import('@/components/StartTheApplication')
            }
          ],
          redirect:'/chooseP4Compiler'
        },
        {
          path: '/HomePage',
          name: 'HomePage',
          component: () => import('@/views/HomePage')
        },
        {
          path: '/DeploymentMechanism',
          name: 'DeploymentMechanism',
          component: () => import('@/views/DeploymentMechanism')
        },
      ],
      redirect:'ModalDeployment'
    },
    {
      // 会匹配所有路径
      path: '*',
      component: () => import('@/layout/index'),
    }
  ]
})
