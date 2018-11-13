import _ from 'lodash'
import { NEW_NOTIFICATION } from './constants'
import { COLLECTION_MUTATIONS, MODEL_MUTATIONS } from '@/store/lib/mixins'

// Notification Module Mutations
export default {
  user (state, user) {
    state.user = user
  },
  ...COLLECTION_MUTATIONS,
  ...MODEL_MUTATIONS,
  resetNewModel (state) {
    state.newModel = _.cloneDeep(NEW_NOTIFICATION)
  },
  editModel (state, model) {
    state.editModel = _.cloneDeep(model)
  }
}
