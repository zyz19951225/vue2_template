import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入store
import store from './store'
import "./icons"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
