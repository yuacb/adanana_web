import Vue from 'vue'
import VueResource from 'vue-resource'; 
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.use(VueResource)
new Vue({
  el: '#app',
  router,
  icons,
  template: '<App/>',
  components: {
    App
  },
})
