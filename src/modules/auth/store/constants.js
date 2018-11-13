// Routes
export const LOGIN_ROUTE = '/auth/local'
export const REGISTER_ROUTE = '/api/users'
export const PROFILE_ROUTE = '/api/users/me'

// Notifications
export const LOGIN_SUCCESS_NOTIFICATION = {
  message: 'Successfully authenticated',
  context: 'success',
  dismissible: true
}

export const LOGIN_ERROR_NOTIFICATION = {
  message: 'Authentication error',
  context: 'warning',
  dismissible: true
}

export const REGISTER_SUCCESS_NOTIFICATION = {
  message: 'Successfully registered',
  context: 'success',
  dismissible: true
}

export const REGISTER_ERROR_NOTIFICATION = {
  message: 'Registration error',
  context: 'warning',
  dismissible: true
}
