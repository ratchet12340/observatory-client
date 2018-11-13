// TODO - replace router here - instead,
// emit an event and have it handled by another Vuex module
import router from '@/router'
import axios from 'axios'
import { API_ROOT } from './constants'
import { $POST, $PUT, $DEL } from '@/store/lib/helpers'

// // // //

export default {
  fetchMentorPreferences ({ state, commit, dispatch, rootGetters }, userRegistrationId) {
    commit('fetching', true)

    axios.get(API_ROOT + '/' + userRegistrationId + '/mentor_preferences', {
      headers: {
        authorization: rootGetters['auth/header']
      }
    })
    .then(({ data }) => {
      commit('mentor_preferences', data)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      commit('notification/add', { message: 'Fetch error', context: 'danger', dismissible: true }, { root: true })
      throw err // TODO - better error handling
    })
  },
  // GET /api/user_registrations
  fetchCollection ({ state, commit, dispatch, rootGetters }) {
    commit('fetching', true)
    let apiRoot
    if (state.filter) {
      apiRoot = API_ROOT + '/search'
    } else {
      apiRoot = API_ROOT
    }
    axios.get(apiRoot, {
      headers: {
        authorization: rootGetters['auth/header']
      },
      params: {
        search: state.filter,
        page: state.currentPage,
        per_page: state.pageSize
      }
    })
    .then(({ data }) => {
      commit('collection', data)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      commit('notification/add', { message: 'Fetch error', context: 'danger', dismissible: true }, { root: true })
      throw err // TODO - better error handling
    })
  },
  // GET /api/user_registrations/:id
  fetchModel ({ state, commit, dispatch }, userRegistrationId) {
    commit('fetching', true)
    axios.get(`${API_ROOT}/${userRegistrationId}`, {
      // headers: {
      //   authorization: rootGetters['auth/token']
      // }
    })
    .then(({ data }) => {
      commit('model', data)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      commit('notification/add', { message: 'Fetch error', context: 'danger', dismissible: true }, { root: true })
      throw err // TODO - better error handling
    })
  },
  // GET /api/user_registrations/:id
  fetchEditModel ({ state, commit, dispatch }, userRegistrationId) {
    commit('fetching', true)
    axios.get(`${API_ROOT}/${userRegistrationId}`, {
      // headers: {
      //   authorization: rootGetters['auth/token']
      // }
    })
    .then(({ data }) => {
      commit('editModel', data)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      commit('notification/add', { message: 'Fetch error', context: 'danger', dismissible: true }, { root: true })
      throw err // TODO - better error handling
    })
  },
  // POST /api/user_registrations
  createModel ({ state, commit, dispatch }, userRegistrationModel) {
    commit('fetching', true)
    $POST(`${API_ROOT}`, {
      body: userRegistrationModel
    })
    .then((userRegistraton) => {
      commit('fetching', false)
      router.push(`/user_registrations`)
    })
    .catch((err) => {
      commit('fetching', false)
      commit('notification/add', { message: 'Create error', context: 'danger', dismissible: true }, { root: true })
      throw err
    })
  },
  // PUT /api/user_registrations/:id
  updateModel ({ state, commit }, userRegistrationModel) {
    commit('fetching', true)
    $PUT(`${API_ROOT}/${userRegistrationModel._id}`, {
      body: userRegistrationModel
    })
    .then((userRegistraton) => {
      commit('fetching', false)
      router.push(`/user_registrations/${userRegistraton._id}`)
    })
    .catch((err) => {
      commit('fetching', false)
      commit('notification/add', { message: 'Update error', context: 'danger', dismissible: true }, { root: true })
      throw err
    })
  },
  // DELETE /api/user_registrations/:id
  deleteModel ({ state, commit }, userRegistrationModel) {
    commit('fetching', true)
    $DEL(`${API_ROOT}/${userRegistrationModel._id}`)
    .then((userRegistraton) => {
      commit('fetching', false)
      let collection = state.collection.filter((m) => { return m._id !== userRegistrationModel._id })
      commit('collection', collection)
      router.push(`/user_registrations`)
    })
    .catch((err) => {
      commit('fetching', false)
      commit('notification/add', { message: 'Destroy error', context: 'danger', dismissible: true }, { root: true })
      throw err // TODO - better error handling
    })
  }
}
