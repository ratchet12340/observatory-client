import ProjectList from './pages/list'
import ProjectNew from './pages/new'
import ProjectShow from './pages/show'
import ProjectEdit from './pages/edit'

const ProjectListRoute = {
  path: '/projects',
  component: ProjectList
  // beforeEnter: Middleware.ensureAuthenticated
}

// TODO - must be authenticated
const ProjectNewRoute = {
  path: '/projects/new',
  component: ProjectNew
  // beforeEnter: Middleware.requireAuth
}

const ProjectShowRoute = {
  path: '/projects/:id',
  component: ProjectShow,
  props: true
}

// TODO - must be authenticated && owner of project
const ProjectEditRoute = {
  path: '/projects/:id/edit',
  component: ProjectEdit,
  props: true
  // beforeEnter: Middleware.requireAuth
}

export default [
  ProjectListRoute,
  ProjectNewRoute,
  ProjectShowRoute,
  ProjectEditRoute
]
