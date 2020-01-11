import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import SvgIcon from './components/app/SvgIcon'

Vue.config.productionTip = false
Vue.component('SvgIcon', SvgIcon)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
