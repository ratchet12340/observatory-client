import UrpNew from '@/modules/urp/pages/new'
import UrpShow from '@/modules/urp/pages/show'

const UrpNewRoute = {
  path: '/urp/new',
  component: UrpNew
}

const UrpShowRoute = {
  path: '/urp',
  component: UrpShow
}

export default [
  UrpNewRoute,
  UrpShowRoute
]
