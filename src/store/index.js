import Vue from 'vue'
import Vuex from 'vuex'

// import event from '@/modules/event/store'
import auth from '@/modules/auth/store'
import blog from '@/modules/status_update/store'
import project from '@/modules/project/store'
import user from '@/modules/user/store'
import smallgroup from '@/modules/smallgroup/store'
import notification from '@/modules/notification/store'
import attendance from '@/modules/attendance/store'
import semester from '@/modules/semester/store'
import urp from '@/modules/urp/store'
import userRegistration from '@/modules/user_registration/store'

Vue.use(Vuex)

// Exports new Vuex Store instance
export default new Vuex.Store({
  modules: {
    auth,
    blog,
    project,
    user,
    smallgroup,
    notification,
    attendance,
    semester,
    urp,
    user_registration: userRegistration
  }
})
