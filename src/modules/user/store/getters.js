import { COLLECTION_GETTERS, MODEL_GETTERS, FILTER_GETTERS, PAGINATION_GETTERS } from '@/store/lib/mixins'

// User Module Getters
export default {
  ...COLLECTION_GETTERS,
  ...MODEL_GETTERS,
  ...FILTER_GETTERS,
  ...PAGINATION_GETTERS,
  filteredCollection: state => {
    return state.filteredCollection
  },
  fetchingUserProjects: state => {
    return state.fetchingUserProjects
  },
  userProjects: state => {
    return state.userProjects
  }
}
