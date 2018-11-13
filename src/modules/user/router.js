import UserList from './pages/user_list'
import UserShow from './pages/user_show'
import UserSettings from './pages/user_settings'

const UserListRoute = {
  path: '/users',
  component: UserList
}

const UserShowRoute = {
  path: '/users/:id',
  component: UserShow,
  props: true
}

// TODO - must be authenticated
const UserSettingsRoute = {
  path: '/settings',
  component: UserSettings
}

export default [
  UserListRoute,
  UserShowRoute,
  UserSettingsRoute
]
