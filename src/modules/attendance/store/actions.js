import { API_ROOT } from './constants'
import { $GET, $POST, $PUT } from '@/store/lib/helpers'
import { FILTER_ACTIONS, PAGINATION_ACTIONS } from '@/store/lib/mixins'

// // // //

// Attendance module actions
// functions that causes side effects and can involve asynchronous operations.
export default {
  ...PAGINATION_ACTIONS,
  ...FILTER_ACTIONS,

  // Fetches the attendance records for a semester collection for the current user
  fetchSemesterAttendance: ({ commit, rootGetters }) => {
    commit('loadingCollection', true)
    $GET(API_ROOT, { token: rootGetters['auth/token'] })
    .then((json) => {
      commit('collection', json)
      commit('loadingCollection', false)
    })
    .catch((err) => {
      commit('loadingCollection', false)
      throw err
    })
  },

  fetchUnverifiedAttendance: ({ commit, rootGetters }) => {
    commit('loadingUnverifiedAttendance', true)
    $GET(API_ROOT + '/unverified/today', { token: rootGetters['auth/token'] })
    .then((json) => {
      commit('unverifiedAttendance', json)
      commit('loadingUnverifiedAttendance', false)
    })
    .catch((err) => {
      commit('loadingUnverifiedAttendance', false)
      throw err
    })
  },

  // Fetches the attendance collection for a single user by ID
  fetchUserAttendance: ({ commit, rootGetters }, userId = 'me') => {
    commit('loadingCollection', true)

    let api = API_ROOT + '/present/' + userId

    $GET(api, { token: rootGetters['auth/token'] })
    .then((json) => {
      commit('collection', json)
      commit('loadingCollection', false)
    })
    .catch((err) => {
      commit('loadingCollection', false)
      throw err
    })
  },

  // Fetches the attendance collection for this user
  fetchCollection: ({ commit, rootGetters }) => {
    commit('fetching', true)

    let api = API_ROOT + '/present/me'

    $GET(api, { token: rootGetters['auth/token'] })
    .then((json) => {
      commit('collection', json)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err
    })
  },

  // Submits Attendance code
  submitCode: ({ commit, rootGetters }, { code }) => {
    let api = API_ROOT + '/attend'
    let body = { dayCode: code }

    $POST(api, { token: rootGetters['auth/token'], body: body })
    .then((json) => {
      commit('unverified', json.unverified)
    })
    .catch((err) => {
      throw err
    })
  },

  // verifyAttendance
  // Verifies an individual attendance record
  verifyAttendance ({ commit, dispatch, rootGetters }, attendanceId) {
    $PUT(API_ROOT + '/' + attendanceId + '/verify', { token: rootGetters['auth/token'] })
    .then((json) => {
      console.log('VERIFIED??')
      console.log(json)
      dispatch('fetchUnverifiedAttendance')
    })
    .catch((err) => {
      throw err
    })
  }
}
