import { BUILD_COLLECTION_GETTERS, COLLECTION_GETTERS, MODEL_GETTERS, NEW_MODEL_GETTERS } from '@/store/lib/mixins'

// SmallGroup Module Getters
export default {
  ...COLLECTION_GETTERS,
  ...BUILD_COLLECTION_GETTERS('smallGroupMembers'),
  ...MODEL_GETTERS,
  ...NEW_MODEL_GETTERS
}
