import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// vue-router
// Router library
Vue.use(Router)

// vuex
// State management library
Vue.use(Vuex)

// vue-meta
// Supports `meta` object returned with `module.defaults`
Vue.use(Meta)

// BootstrapVue configuration
Vue.use(BootstrapVue)
