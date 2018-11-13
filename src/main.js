// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Meta from 'vue-meta'
import mavonEditor from 'mavon-editor'
import BootstrapVue from 'bootstrap-vue'
import 'mavon-editor/dist/css/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App'
import router from '@/router'
import store from '@/store'
import PageHeader from '@/components/PageHeader'

// vue-meta
// Supports `meta` object returned with `module.defaults`
Vue.use(Meta)

// BootstrapVue configuration
Vue.use(BootstrapVue)

// mavon-editor
// Beautiful markdown editing
Vue.use(mavonEditor)

// QUESTION - ??
Vue.config.productionTip = false

// Bootstraps Global Components
Vue.component('PageHeader', PageHeader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router: router,
  template: '<App/>',
  components: { App }
})
