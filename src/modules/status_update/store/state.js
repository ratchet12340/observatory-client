import { COLLECTION_STATE, MODEL_STATE } from '@/store/lib/mixins'

// Blog Module State
export default {
  ...COLLECTION_STATE,
  ...MODEL_STATE,
  newModel: {},
  destroying: false
}
