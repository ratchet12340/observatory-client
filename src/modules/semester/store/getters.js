import { COLLECTION_GETTERS } from '@/store/lib/mixins'

export default {
  ...COLLECTION_GETTERS,
  daycode: state => {
    return state.daycode
  }
}
