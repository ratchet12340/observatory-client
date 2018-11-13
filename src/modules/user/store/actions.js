import _ from 'lodash'
import { $GET, $POST, $PUT, $DEL } from '@/store/lib/helpers'
import { PAGINATION_ACTIONS, FILTER_ACTIONS } from '@/store/lib/mixins'
import { API_ROOT, SET_ROLE_NOTIFICATIONS, ACTIVATE_NOTIFICATIONS, DEACTIVATE_NOTIFICATIONS } from './constants'

// // // //

// User module actions
// functions that causes side effects and can involve asynchronous operations.
export default {
  ...PAGINATION_ACTIONS,
  ...FILTER_ACTIONS,
  filteredCollection: ({ state, commit, dispatch }) => {
    let filteredCollection = _.chain(state.collection)
    .filter(u => {
      // let tech = u.tech || []
      // const filter = state.filter.toLowerCase()
      // Checks filter against
      // const userFlag = u.name || u.first_name
      // let flag = userFlag.toLowerCase().indexOf(filter) !== -1
      // Checks filter again the user's tech tags
      // for (let i = 0; i < tech.length; i++) {
      //   let tag = tech[i].toLowerCase()
      //   if (tag.indexOf(filter) !== -1) {
      //     flag = true
      //     break
      //   }
      // }
      return true
      // return flag
    })
    .orderBy(['name'], [state.orderBy])
    .value()

    commit('filteredCollection', filteredCollection)
    dispatch('paginatedCollection')
  },
  fetchCollection: ({ dispatch, commit, state, rootGetters }) => {
    commit('fetching', true)

    // Fetches either active or inactive users
    let apiRoute = API_ROOT
    if (state.showingInactive) {
      apiRoute += '/past'
    }

    // Fetches Collection from the server
    $GET(apiRoute, { token: rootGetters['auth/token'] })
    .then((json) => {
      commit('fetching', false)
      commit('collection', json)
      dispatch('filteredCollection')
    })
    .catch((err) => {
      commit('fetching', false)
      throw err // TODO - better error handling
    })
  },

  // fetchAdminCollection
  // Admin-only user collection for /admin/users
  fetchAdminCollection: ({ commit, state, rootGetters }) => {
    commit('fetching', true)

    // Fetches either active or inactive users
    let apiRoute = API_ROOT + '/adminstats'

    // Fetches Collection from the server
    $GET(apiRoute, { token: rootGetters['auth/token'] })
    .then((json) => {
      commit('fetching', false)
      commit('collection', json)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err // TODO - better error handling
    })
  },

  // fetchUser
  // Fetches an individual user from the server
  fetchUser ({ store, commit, rootGetters }, userID) {
    commit('fetching', true)
    $GET(`/api/users/${userID}`, { token: rootGetters['auth/token'] })
    .then((user) => {
      commit('model', user)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err // TODO - better error handling
    })
  },

  // fetchUserProjects
  // Fetches projects belonging to an individual user
  fetchUserProjects ({ store, commit, rootGetters }, userID) {
    commit('fetchingUserProjects', true)
    commit('userProjects', [])
    $GET(`/api/users/${userID}/projects`, { token: rootGetters['auth/token'] })
    .then((projects) => {
      commit('userProjects', projects)
      commit('fetchingUserProjects', false)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err // TODO - better error handling
    })
  },

  // setUserRole
  // Updates an individual User's role
  // @permissions Admin
  setUserRole ({ commit, rootGetters }, user) {
    commit('fetching', true)

    // POST /api/users/:id/role
    $POST(API_ROOT + '/' + user._id + '/role', {
      token: rootGetters['auth/token'],
      body: { role: user.role }
    })
    .then((json) => {
      commit('notification/add', SET_ROLE_NOTIFICATIONS.SUCCESS, { root: true })
      commit('fetching', false)
    })
    .catch((err) => {
      commit('notification/add', SET_ROLE_NOTIFICATIONS.ERROR, { root: true })
      commit('fetching', false)
      throw err
    })
  },

  // activateUser
  // Activates an individual User
  activateUser ({ commit, rootGetters }, user) {
    commit('fetching', true)

    // PUT /api/users/:id/activate
    $PUT(API_ROOT + '/' + user._id + '/activate', {
      token: rootGetters['auth/token']
    })
    .then((json) => {
      user.active = true
      commit('notification/add', ACTIVATE_NOTIFICATIONS.SUCCESS, { root: true })
      commit('fetching', false)
    })
    .catch((err) => {
      commit('notification/add', ACTIVATE_NOTIFICATIONS.ERROR, { root: true })
      commit('fetching', false)
      throw err
    })
  },

  // deactivateUser
  // Deactivates an individual User
  deactivateUser ({ commit, rootGetters }, user) {
    commit('fetching', true)

    // PUT /api/users/:id/activate
    $PUT(API_ROOT + '/' + user._id + '/deactivate', {
      token: rootGetters['auth/token']
    })
    .then((json) => {
      user.active = false
      commit('notification/add', DEACTIVATE_NOTIFICATIONS.SUCCESS, { root: true })
      commit('fetching', false)
    })
    .catch((err) => {
      commit('notification/add', DEACTIVATE_NOTIFICATIONS.ERROR, { root: true })
      commit('fetching', false)
      throw err
    })
  },

  // addProject
  // Adds a project to the list of projects that a user is contributing to
  addProject ({ commit, dispatch, rootGetters }, { userID, projectID }) {
    commit('fetching', true)

    let api = API_ROOT + '/' + userID + '/project'
    let body = {project: projectID}

    $PUT(api, {
      token: rootGetters['auth/token'],
      body: body
    })
    .then((json) => {
      commit('fetching', false)
      dispatch('auth/fetchUserProfile', null, { root: true })
    })
    .catch((err) => {
      commit('fetching', false)
      throw err
    })
  },

  // removeProject
  // Removes a project from the list of projects that a user is contributing to
  removeProject ({ commit, dispatch, rootGetters }, { userID, projectID }) {
    commit('fetching', true)

    let api = API_ROOT + '/' + userID + '/project'
    let body = {project: projectID}

    $DEL(api, {
      token: rootGetters['auth/token'],
      body: body
    })
    .then((json) => {
      commit('fetching', false)
      dispatch('auth/fetchUserProfile', null, { root: true })
    })
    .catch((err) => {
      commit('fetching', false)
      throw err
    })
  }
}
