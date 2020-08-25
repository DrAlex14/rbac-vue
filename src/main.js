import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.prototype.$http = Axios;
Vue.use(element)

//与后端进行数据交换的时候带上cookie
Axios.defaults.withCredentials = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
