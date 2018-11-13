// Notification Containers
import NotificationList from './pages/list'
import NotificationNew from './pages/new'
import NotificationShow from './pages/show'

const NotificationListRoute = {
  path: '/notifications',
  component: NotificationList
}

const NotificationNewRoute = {
  path: '/notifications/new',
  component: NotificationNew
}

const NotificationShowRoute = {
  path: '/notifications/:id',
  component: NotificationShow,
  props: true
}

export default [
  NotificationListRoute,
  NotificationNewRoute,
  NotificationShowRoute
]
