import AuthLogin from './pages/login'
import AuthRegister from './pages/register'

const AuthLoginRoute = {
  path: '/auth/login',
  component: AuthLogin
}

const AuthRegisterRoute = {
  path: '/auth/register',
  component: AuthRegister
}

// TODO - scope these views to be not-authenticated-only
export default [
  AuthLoginRoute,
  AuthRegisterRoute
]
