import Vue from 'vue'
import App from './App.vue'
import router from './Router'
import store from './store/'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


/*配置请求根路径*/
import axios from 'axios'

Vue.prototype.$http = axios

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
