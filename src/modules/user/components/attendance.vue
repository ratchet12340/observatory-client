<template>
  <div class="card mt-3" v-if="model._id === currentUser._id">
    <div class="card-body">
      <h4 class="card-title">
        Attendance
      </h4>

      <p class="lead">TODO - put attendance records here</p>

    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['model'],
  created () {
    // TODO - wire this method to accept a userId parameter if:
    // the current user isn't the one whos profile is being viewed
    // AND if the current user is an admin/mentor
    this.fetch()
  },
  methods: mapActions({
    fetch: 'attendance/fetchUserAttendance'
  }),
  computed: mapGetters({
    currentUser: 'auth/current_user',
    collection: 'attendance/collection'
  })
}
</script>
