import { COLLECTION_STATE } from '@/store/lib/mixins'

// Attendance Module State
export default {
  ...COLLECTION_STATE,
  unverified: false,
  error: false
}
