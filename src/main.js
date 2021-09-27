import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'

import Vant from 'vant'
import './assets/font/iconfont.css'
import './css/resetvant.css'
//import { from } from 'core-js/core/array'

Vue.config.productionTip = false
Vue.use(Vant)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
