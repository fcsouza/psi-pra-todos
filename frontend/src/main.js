import Vue from 'vue'
import App from './App.vue'
import store from './store'
import auth from './auth'
import router from './router/index'
import toastMixin from './mixins/toastMixin'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Popper from 'popper.js'
import VueAuth from '@websanova/vue-auth'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueIziToast from 'vue-izitoast'
import VueDatepicker from 'vuejs-datepicker/dist/vuejs-datepicker.esm.js'
import vSelect from 'vue-select'

import 'izitoast/dist/css/iziToast.min.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './sass/style.scss'

require('./bootstrap')

Vue.router = router

Vue.component('datepicker', VueDatepicker)
Vue.component('v-select', vSelect)

Vue.use(VueIziToast)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios.create({
  baseURL: process.env.VUE_APP_BACKEND_ROUTE
  // withCredentials: false,
  // headers: {
  //   'Content-Type': 'application/json',
  //   Authorization: 'Bearer ' + localStorage['jwt-auth'],
  //   'Access-Control-Allow-Origin': '*',
  //   Accept: 'application/json, text/plain, */*',
  //   'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
  //   'Access-Control-Allow-Credentials': true
  // }
}))
Vue.use(VueRouter)
Vue.use(VueAuth, auth)
Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false

Vue.config.productionTip = process.env.VUE_APP_PRODUCTION_TIP

new Vue({
  mixins: [toastMixin],
  router,
  store,
  render: h => h(App)
}).$mount('#app')
