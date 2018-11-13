import { $POST, $GET, $PUT, $DEL } from '@/store/lib/helpers'
import { API_ROOT } from './constants'

// Blog actions
export default {
  // Fetches Collection from the server
  fetchCollection: ({ commit }) => {
    commit('fetching', true)

    $GET(API_ROOT)
    .then((json) => {
      commit('fetching', false)
      commit('collection', json.reverse()) // TODO - remove .reverse() - instead, sort using FILTER mixins
    })
    .catch((err) => {
      commit('fetching', false)
      throw err
    })
  },
  // Fetches Model from the server
  fetchModel ({ commit }, blogId) {
    commit('fetching', true)

    $GET(`${API_ROOT}/${blogId}`)
    .then((blog) => {
      commit('current', blog)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err
    })
  },
  create ({ commit, rootGetters }) {
    $POST(API_ROOT, {
      token: rootGetters['auth/token'],
      body: {
        title: 'sample-blog-create',
        description: 'sample123',
        date: new Date()
      }
    })
    .then((json) => {
      console.log('Blog Create [Done]')
      console.log(json)
    })
    .catch((err) => {
      console.log('Error in blog create:\n' + err)
    })
  },
  // resetNewModel
  // Resets state.newModel to the default value defined in blog/constants.js
  resetNewModel ({ commit }) {
    commit('newModel')
  },
  update ({ commit, rootGetters }, blogModel) {
    console.log('UPDATE BLOG POST')

    $PUT(API_ROOT + '/' + blogModel._id, {
      body: blogModel,
      token: rootGetters['auth/token']
    })
    .then((response) => {
      console.log('RESPONSE')
    })
    .catch((err) => {
      console.log('ERR!')
      throw err
    })
  },
  destroy ({ commit, rootGetters }, postID) {
    commit('destroying', true)
    $DEL(`${API_ROOT}/${postID}`, { token: rootGetters['auth/token'] })
    .then((project) => {
      commit('destroying', false)
    })
    .catch((err) => {
      commit('destroying', false)
      throw err // TODO - better error handling
    })
  }
}
