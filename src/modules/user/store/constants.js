export const API_ROOT = '/api/users'

// Notifications
export const SET_ROLE_NOTIFICATIONS = {
  SUCCESS: {
    message: 'Successfully updated User role',
    context: 'success',
    dismissible: true
  },
  ERROR: {
    message: 'Error updating User role',
    context: 'warning',
    dismissible: true
  }
}

export const ACTIVATE_NOTIFICATIONS = {
  SUCCESS: {
    message: 'Successfully activated User',
    context: 'success',
    dismissible: true
  },
  ERROR: {
    message: 'Error activating User',
    context: 'warning',
    dismissible: true
  }
}

export const DEACTIVATE_NOTIFICATIONS = {
  SUCCESS: {
    message: 'Successfully deactivated User',
    context: 'success',
    dismissible: true
  },
  ERROR: {
    message: 'Error deactivating User',
    context: 'warning',
    dismissible: true
  }
}
