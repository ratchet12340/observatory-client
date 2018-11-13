// import _ from 'lodash'
import { COLLECTION_GETTERS, MODEL_GETTERS, FILTER_GETTERS, PAGINATION_GETTERS } from '@/store/lib/mixins'

// Project Module Getters
export default {
  ...COLLECTION_GETTERS,
  ...MODEL_GETTERS,
  ...FILTER_GETTERS,
  ...PAGINATION_GETTERS,
  filteredCollection: state => {
    return state.filteredCollection
  },
  newModel: state => {
    return state.newModel
  },
  myProjects: state => {
    return state.myProjects
  },
  menteeProjects: state => {
    return state.menteeProjects
  },
  favoriteProjects: state => {
    return state.favoriteProjects
  },
  contributors: state => {
    return state.contributors
  },
  fetchingContributors: state => {
    return state.fetchingContributors
  },
  isActive: state => {
    return state.projectActive
  },
  isDefault: state => {
    return state.projectDefault
  }
}
