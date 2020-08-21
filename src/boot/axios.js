// import something here
import axios from 'axios'
import Vue from 'vue'
import store from '../store'
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default async (/* { app, router, Vue ... } */) => {
  // something to do
  Vue.prototype.$axios = axios
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.state.auth.token;
}
