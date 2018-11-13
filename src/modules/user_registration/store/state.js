import {
  COLLECTION_STATE,
  MODEL_STATE
} from '@/store/lib/mixins'

// User Registration Module State
export default {
  mentor_preferences: [],
  ...COLLECTION_STATE,
  ...MODEL_STATE,
  newModel: {},
  editModel: {}
}
