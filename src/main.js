import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router/index'
import {store} from './framework/store/store'
import './stylus/main.styl'
import toast from '@/framework/toast'

Vue.config.productionTip = false

Vue.prototype.$toast = toast;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
