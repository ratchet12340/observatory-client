import actions from './actions'
import state from './state'
import getters from './getters'
import mutations from './mutations'
const namespaced = true

// notification Vuex module definition
export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}
