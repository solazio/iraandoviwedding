import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router/index'
import {store} from './framework/store/store'
import './stylus/main.styl'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
