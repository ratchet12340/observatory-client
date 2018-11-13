import BlogList from '@/modules/status_update/pages/list'
import BlogNew from '@/modules/status_update/pages/new'
import BlogEdit from '@/modules/status_update/pages/edit'
import BlogShow from '@/modules/status_update/pages/show'

const BlogListRoute = {
  path: '/blogs',
  name: 'blog_list',
  component: BlogList
}

const BlogNewRoute = {
  path: '/blogs/new',
  name: 'blog_new',
  component: BlogNew
}

const BlogEditRoute = {
  path: '/blogs/:id/edit',
  name: 'blog_edit',
  component: BlogEdit,
  props: true
}

const BlogShowRoute = {
  path: '/blogs/:id',
  name: 'blog_show',
  component: BlogShow,
  props: true
}

export default [
  BlogListRoute,
  BlogNewRoute,
  BlogEditRoute,
  BlogShowRoute
]
