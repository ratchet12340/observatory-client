import AdminAttendance from './pages/admin_attendance'
import AdminSettings from './pages/admin_settings'
import AdminUsers from './pages/admin_users'

const AdminAttendanceRoute = {
  path: '/admin/attendance',
  component: AdminAttendance
}

const AdminUserRoute = {
  path: '/admin/users',
  component: AdminUsers
}

const AdminSettingsRoute = {
  path: '/admin/settings',
  component: AdminSettings
}

// TODO - scope these views to be admin-only
export default [
  AdminAttendanceRoute,
  AdminUserRoute,
  AdminSettingsRoute
]
