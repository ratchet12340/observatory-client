import { COLLECTION_MUTATIONS } from '@/store/lib/mixins'

// ClassYear Module mutations
export default {
  ...COLLECTION_MUTATIONS,
  daycode (state, daycode) {
    state.daycode = daycode
  }
}
