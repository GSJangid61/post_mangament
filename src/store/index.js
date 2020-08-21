import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import user from './user'
import category from './category'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    user,
    category
  }
})

export default store