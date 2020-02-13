import Vue from 'vue'
import Vuelidata from 'vuelidate'
import App from './App.vue'
import store from './store'
import router from './router'
import SvgIcon from './components/app/SvgIcon'
import Loader from "./components/app/Loader";

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'



Vue.config.productionTip = false
Vue.component('SvgIcon', SvgIcon)
Vue.component('Loader',Loader)
Vue.use(Vuelidata)


firebase.initializeApp({
  apiKey: "AIzaSyAsi8Kct3Nu4DzfN-c88HM1EGBJR-V5kVU",
  authDomain: "fin-home-crm.firebaseapp.com",
  databaseURL: "https://fin-home-crm.firebaseio.com",
  projectId: "fin-home-crm",
  storageBucket: "fin-home-crm.appspot.com",
  messagingSenderId: "515919502897",
  appId: "1:515919502897:web:88450d85c7400a028ebf10"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    new Vue({
      store,
      router,
      render: h => h(App),
    }).$mount('#app')
  }
})


