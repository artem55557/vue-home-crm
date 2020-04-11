import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import bills from './bills'
import record from './record'
import category from './category'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async fectchCurrency() {
      const key = process.env.VUE_APP_FIXER
      const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`)
      return await res.json()
     
    }
  },
  modules: {
    auth, info, bills, record, category
  }
})