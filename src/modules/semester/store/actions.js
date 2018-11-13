import { API_ROOT } from './constants'
import { $POST } from '@/store/lib/helpers'

// // // //

// ClassYear module actions
// functions that causes side effects and can involve asynchronous operations.
export default {
  // Creates a new ClassYear model
  create ({ state, commit, rootGetters }) {
    // TODO - pull `body` from state
    let body = {
      semester: 'Fall 2018'
    }

    // commit('fetching', true)
    $POST(API_ROOT, { token: rootGetters['auth/token'], body: body })
    .then((response) => {
      console.log(response)
      // commit('fetching', false)
      // Router.push('/projects')
    })
    .catch((err) => {
      // commit('fetching', false)
      // console.log(err) // TODO - update state.newModel with errors: {}
      throw err // TODO - better error handling
    })
  },

  // POSTs a new attendance code
  generateAttendanceCode ({ state, commit, rootGetters }) {
    // Assembles body for new ClassYear API request
    let api = API_ROOT + '/daycode'

    commit('fetching', true)
    $POST(api, {
      token: rootGetters['auth/token'],
      body: {
        bonusDay: false
      }
    })
    .then((res) => {
      commit('daycode', res.code)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err // TODO - better error handling
    })
  },
  // POSTs a new bonus session attendance code
  generateBonusCode ({ state, commit, rootGetters }) {
    // Assembles body for new ClassYear API request
    let api = API_ROOT + '/daycode'

    commit('fetching', true)
    $POST(api, {
      token: rootGetters['auth/token'],
      body: {
        bonusDay: true
      }
    })
    .then((res) => {
      commit('daycode', res.code)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err // TODO - better error handling
    })
  }
}
