import { COLLECTION_STATE, MODEL_STATE } from '@/store/lib/mixins'

// Notification Module State
export default {
  user: {},
  ...COLLECTION_STATE,
  ...MODEL_STATE,
  newModel: {},
  editModel: {}
}
