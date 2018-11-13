import { COLLECTION_GETTERS, MODEL_GETTERS } from '@/store/lib/mixins'

// Notification Module Getters
const getters = {
  user: state => {
    return state.user
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

export default getters
