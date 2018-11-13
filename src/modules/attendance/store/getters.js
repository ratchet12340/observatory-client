import { BUILD_COLLECTION_GETTERS } from '@/store/lib/mixins'

// Attendance Module Getters
export default {
  ...BUILD_COLLECTION_GETTERS('collection'),
  ...BUILD_COLLECTION_GETTERS('unverifiedAttendance'),
  unverified: state => {
    return state.unverified
  }
}
