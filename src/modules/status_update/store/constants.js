// Blog Module Constants

export const API_ROOT = '/api/posts'

const STATUS_DRAFT = 'DRAFT'

const STATUS_PUBLISHED = 'PUBLISHED'

export const STATUS_DROPDOWN = [
  { value: STATUS_PUBLISHED, label: 'Published' },
  { value: STATUS_DRAFT, label: 'Draft' }
]

export const NEW_BLOG = {
  title: '',
  body: '',
  project_id: '',
  user_id: '',
  tech: [],
  status: STATUS_DRAFT,
  errors: {}
}
