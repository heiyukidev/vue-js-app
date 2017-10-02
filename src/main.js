// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
router.afterEach((to, from) => {
  setTimeout(() => {
    window.dispatchEvent(new Event('load'))
  }, 100)
})
import 'material-design-lite/dist/material.min.js'
import 'material-design-lite/dist/material.min.css'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
