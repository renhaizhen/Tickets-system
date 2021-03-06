// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Jq from 'jquery'
import store from './store'
import crypto from 'crypto'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.config.productionTip = false
require('./mock.js')
//全局注册iView
Vue.use(iView)
//发送请求的原型方法
Vue.prototype.$ajax=Jq
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  crypto,
  components: { App },
  template: '<App/>'
})
