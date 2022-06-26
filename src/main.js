import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from "axios";
axios.defaults.baseURL = "http://cxyabc.vaiwan.com"
axios.interceptors.response.use(response => {
      return response.data;
    }, error => {
          console.log('err' + error) // for debug
          return Promise.reject(error);
    }
);

//vue中使用网页防复制
document.onselectstart = function () {
    return false;
};
document.oncontextmenu = function () {
    return false;
};

Vue.config.productionTip = false
Vue.prototype.axios = axios



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
