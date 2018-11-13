import MentorVerify from './pages/mentor_verify'
import MentorSmallGroup from './pages/mentor_small_group'

const MentorVerifyRoute = {
  path: '/mentor/verify',
  component: MentorVerify
}

const MentorSmallGroupRoute = {
  path: '/mentor/small_group',
  component: MentorSmallGroup
}

// TODO - scope these views to be mentor-and-admin only
export default [
  MentorVerifyRoute,
  MentorSmallGroupRoute
]
