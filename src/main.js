import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from './Router' 
import { store } from './Store'
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
