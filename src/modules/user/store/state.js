import { COLLECTION_STATE, MODEL_STATE, FILTER_STATE, PAGINATION_STATE } from '@/store/lib/mixins'

// User Module State
export default {
  ...COLLECTION_STATE,
  ...MODEL_STATE,
  ...FILTER_STATE,
  ...PAGINATION_STATE,
  fetchingUserProjects: false,
  userProjects: []
}
