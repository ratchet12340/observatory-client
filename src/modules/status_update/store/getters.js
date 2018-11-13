import { COLLECTION_GETTERS, MODEL_GETTERS } from '@/store/lib/mixins'
import { STATUS_DROPDOWN } from './constants'

// Blog Module Getters
export default {
  ...COLLECTION_GETTERS,
  ...MODEL_GETTERS,
  newModel: state => {
    return state.newModel
  },
  dropdownOptions: state => {
    return STATUS_DROPDOWN
  },
  destroying: state => {
    return state.destroying
  }
}
