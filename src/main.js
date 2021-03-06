import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

require('./assets/styles/style.css')

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
