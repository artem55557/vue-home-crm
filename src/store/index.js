import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import bills from './bills'
import record from './record'
import category from './category'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth, info, bills, record, category
  }
})