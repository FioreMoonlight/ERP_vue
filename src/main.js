// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from './http';
import api from './api';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import qs from 'qs'; 

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.api = api;
Vue.prototype.qs = qs;
// Vue.use(VueAxios, axios);
// Vue.http.options.emulateHTTP = true;
// Vue.http.options.emulateJSON = true;
// router.beforeEach((to,from,next)=>{
//     console.log('ready!');
//     if(window.applicationCache){
//         next();
//     }
//     else{
//         alert('该浏览器不支持html5');
//     }
// });


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
