import Vue from 'vue'
import Router from 'vue-router'
import Middleware from './middleware'

// Import routes
import AdminRoutes from '@/modules/admin/router'
import AuthRoutes from '@/modules/auth/router'
import AttendanceRoutes from '@/modules/attendance/router'
import ProfileRoutes from '@/modules/profile/router'
import MentorRoutes from '@/modules/mentor/router'
import ProjectRoutes from '@/modules/project/router'
import UserRoutes from '@/modules/user/router'
import SmallGroupRoutes from '@/modules/smallgroup/router'
import UrpFormRoutes from '@/modules/urp/router'
import StatusUpdateRoutes from '@/modules/status_update/router'
import NotificationRoutes from '@/modules/notification/router'
import UserRegistrationRoutes from '@/modules/user_registration/router'

// vue-router
// Router library
Vue.use(Router)

// Instantiates new Vue-Router instance
let router = new Router({
  routes: [
    ...AdminRoutes,
    ...AuthRoutes,
    ...AttendanceRoutes,
    ...ProfileRoutes,
    ...MentorRoutes,
    ...ProjectRoutes,
    ...UserRoutes,
    ...SmallGroupRoutes,
    ...UrpFormRoutes,
    ...StatusUpdateRoutes,
    ...NotificationRoutes,
    ...UserRegistrationRoutes
  ]
})

// Ensures user authentication before each route
router.beforeEach(Middleware.ensureAuthenticated)

export default router
