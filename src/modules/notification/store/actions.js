import axios from 'axios'
const API_ROOT = '/api/notifications'

// // // //

export default {
  // GET /api/notifications
  fetchCollection ({ state, commit, dispatch, rootGetters }) {
    commit('fetching', true)
    axios.get(API_ROOT, {
      headers: {
        authorization: rootGetters['auth/authorizationHeader']
      }
    })
    .then(({ data }) => {
      commit('collection', data)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      // commit('notification/add', { message: 'Fetch error', context: 'danger', dismissible: true }, { root: true })
      throw err // TODO - better error handling
    })
  },
  // PUT /api/notifications/:id/dismiss
  dismissModel ({ state, commit }, notificationModel) {
    commit('fetching', true)
    axios.put(`${API_ROOT}/${notificationModel._id}`)
    .then(({ data }) => {
      notificationModel.dismissed = true
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      // commit('notification/add', { message: 'Update error', context: 'danger', dismissible: true }, { root: true })
      throw err
    })
  }
}
