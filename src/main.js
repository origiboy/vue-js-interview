import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'

import loader from "vue-ui-preloader";

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  store
}).$mount('#app')

Vue.use(loader)
