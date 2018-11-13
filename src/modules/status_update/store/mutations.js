import { COLLECTION_MUTATIONS, MODEL_MUTATIONS } from '@/store/lib/mixins'
import { NEW_BLOG } from './constants'
import _ from 'lodash'
// Blog Module mutations
export default {
  ...COLLECTION_MUTATIONS,
  ...MODEL_MUTATIONS,
  newModel (state) {
    state.newModel = _.cloneDeep(NEW_BLOG)
  },
  destroying (state, destroying) {
    state.destroying = destroying
  }
}
