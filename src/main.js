// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import VueRouter from 'vue-router'
Vue.config.productionTip = false;
Vue.use(VueRouter);
// 1. 开启debug模式
Vue.config.debug = true;
const router = new VueRouter({
  mode: 'history',   // history 或者 hash
  routes:routes,
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
