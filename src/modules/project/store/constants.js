// Project Module Constants

// Project module API_ROOT
export const API_ROOT = '/api/projects'

// TODO - not all of these fields are needed.
// Pare this down to only include the fields that are not automatically assigned by the server
export const NEW_PROJECT = {
  name: '',
  description: '',
  githubUsername: '',
  githubProjectName: '',
  active: true,
  tech: [],
  photos: [],
  repositories: [],
  repositoryType: 'github',
  errors: {}
}
