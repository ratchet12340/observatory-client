import { BUILD_COLLECTION_STATE, COLLECTION_STATE, MODEL_STATE, NEW_MODEL_STATE } from '@/store/lib/mixins'

// SmallGroup Module State
export default {
  ...COLLECTION_STATE,
  ...BUILD_COLLECTION_STATE('smallGroupMembers'),
  ...MODEL_STATE,
  ...NEW_MODEL_STATE
}
