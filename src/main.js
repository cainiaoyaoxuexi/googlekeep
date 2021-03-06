// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import 'bootstrap/less/bootstrap.less'
import 'bootstrap/js/tooltip'
import 'bootstrap/js/popover'
import './style/custom-bootstrap.less'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
