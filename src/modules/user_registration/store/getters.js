import {
  COLLECTION_GETTERS,
  MODEL_GETTERS
} from '@/store/lib/mixins'

export default {
  mentor_preferences: state => {
    return state.mentor_preferences
  },
  ...COLLECTION_GETTERS,
  ...MODEL_GETTERS,
  newModel: state => {
    return state.newModel
  },
  editModel: state => {
    return state.editModel
  }
}
