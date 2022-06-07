import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入store
import store from './store'
Vue.use(ElementUI);
Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
