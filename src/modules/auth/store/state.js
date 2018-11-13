
// Auth Module State
const state = {
  token: localStorage.token || '',
  fetching: false,
  logging_in: false,
  current_user: {},
  login_user: {
    email: '',
    password: '',
    errors: {}
  },
  register_user: {
    first_name: '',
    last_name: '',
    email: '',
    github: {
      login: ''
    },
    password: '',
    passwordverify: '',
    errors: {}
  }
}

export default state
