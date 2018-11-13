
<template>
  <div class="row">
    <div class="col-sm-4">

      <button class="btn btn-outline-success" @click="addProject({ userID: currentUser._id, projectID: project._id })" v-if="isAuthenticated && !isMember">
        Join Project
      </button>

      <button class="btn btn-outline-danger" @click="removeProject({ userID: currentUser._id, projectID: project._id })" v-if="isAuthenticated && isMember">
        Leave Project
      </button>

      <button class="btn btn-outline-success" @click="markDefault" v-if="isAuthenticated && !isDefault">
        Mark Default
      </button>

      <button class="btn btn-outline-warning" @click="unmarkDefault" v-if="isAuthenticated && isDefault">
        Unmark Default
      </button>

      <button class="btn btn-outline-success" @click="markActive" v-if="isAuthenticated && !isActive">
        Mark Active Project
      </button>

      <button class="btn btn-outline-warning" @click="markPast" v-if="isAuthenticated && isActive">
        Mark Past Project
      </button>

      <button class="btn btn-outline-danger" v-if="isAuthenticated && isMember">
        Edit Project
      </button>

    </div>

    <div class="col-sm-6 text-right">
      <div class="btn-group">
        <a href="#/" class="btn btn-outline-info">
          Website
        </a>
        <a href="#/" class="btn btn-outline-info">
          Repository
        </a>
        <a href="#/" class="btn btn-outline-info">
          Proposal
        </a>
        <a href="#/" class="btn btn-outline-info">
          Blog
        </a>
      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['project'],
  methods: mapActions({
    markDefault: 'project/markDefault',
    unmarkDefault: 'project/unmarkDefault',
    markActive: 'project/markActive',
    markPast: 'project/markPast',
    addProject: 'user/addProject',
    removeProject: 'user/removeProject',
    refreshUser: 'auth/fetchUserProfile'
  }),
  computed: {
    isMember () {
      return this.currentUser.projects.includes(this.project._id)
    },
    ...mapGetters({
      isAuthenticated: 'auth/is_authenticated',
      isActive: 'project/isActive',
      isDefault: 'project/isDefault',
      currentUser: 'auth/current_user',
      projectID: 'project/getID'
    })
  }
}
</script>
