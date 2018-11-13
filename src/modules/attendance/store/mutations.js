import { BUILD_COLLECTION_MUTATIONS } from '@/store/lib/mixins'

// Attendance Module mutations
export default {
  ...BUILD_COLLECTION_MUTATIONS('collection'),
  ...BUILD_COLLECTION_MUTATIONS('unverifiedAttendance'),
  unverified (state, unverified) {
    state.unverified = unverified
  }
}
