import { COLLECTION_MUTATIONS, MODEL_MUTATIONS, FILTER_MUTATIONS, PAGINATION_MUTATIONS } from '@/store/lib/mixins'

// User Module mutations
export default {
  ...COLLECTION_MUTATIONS,
  ...FILTER_MUTATIONS,
  ...MODEL_MUTATIONS,
  ...PAGINATION_MUTATIONS,
  fetchingUserProjects (state, fetching) {
    state.fetchUserProjects = fetching
  },
  userProjects (state, projects) {
    state.userProjects = projects
  }
}
