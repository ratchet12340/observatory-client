import _ from 'lodash'
import { NEW_USER_REGISTRATION } from './constants'
import {
  COLLECTION_MUTATIONS,
  MODEL_MUTATIONS
} from '@/store/lib/mixins'

// User Registration Module Mutations
export default {
  mentor_preferences (state, mentorPreferences) {
    state.mentor_preferences = mentorPreferences
  },
  ...COLLECTION_MUTATIONS,
  ...MODEL_MUTATIONS,
  resetNewModel (state) {
    state.newModel = _.cloneDeep(NEW_USER_REGISTRATION)
  },
  editModel (state, model) {
    state.editModel = _.cloneDeep(model)
  }
}
