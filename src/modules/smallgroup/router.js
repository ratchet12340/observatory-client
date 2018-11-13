import SmallGroupList from './pages/list'
import SmallGroupShow from './pages/show'
import SmallGroupNew from './pages/new'

// TODO - must be authenticated
const SmallGroupListRoute = {
  path: '/small_groups',
  component: SmallGroupList
}

// TODO - must be mentor or admin
const SmallGroupNewRoute = {
  path: '/small_groups/new',
  component: SmallGroupNew
}

// TODO - must be authenticated
const SmallGroupShowRoute = {
  path: '/small_groups/:id',
  component: SmallGroupShow,
  props: true
}

export default [
  SmallGroupListRoute,
  SmallGroupNewRoute,
  SmallGroupShowRoute
]
