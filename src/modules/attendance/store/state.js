import { BUILD_COLLECTION_STATE } from '@/store/lib/mixins'

// Attendance Module State
export default {
  ...BUILD_COLLECTION_STATE('collection'),
  ...BUILD_COLLECTION_STATE('unverifiedAttendance'),
  unverified: false
}
