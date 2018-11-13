// UserRegistration Containers
import UserRegistrationList from './pages/list'
import UserRegistrationNew from './pages/new'
import UserRegistrationShow from './pages/show'
import UserRegistrationEdit from './pages/edit'

const UserRegistrationListRoute = {
  path: '/user_registrations',
  component: UserRegistrationList
}

const UserRegistrationNewRoute = {
  path: '/user_registrations/new',
  component: UserRegistrationNew
}

const UserRegistrationShowRoute = {
  path: '/user_registrations/:id',
  component: UserRegistrationShow,
  props: true
}

const UserRegistrationEditRoute = {
  path: '/user_registrations/:id/edit',
  component: UserRegistrationEdit,
  props: true
}

export default [
  UserRegistrationListRoute,
  UserRegistrationNewRoute,
  UserRegistrationShowRoute,
  UserRegistrationEditRoute
]
