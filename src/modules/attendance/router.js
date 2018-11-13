import Attend from './pages/attend'

const AttendRoute = {
  path: '/attendance',
  component: Attend
}

// TODO - scope these views to be authenticated-only
export default [
  AttendRoute
]
