
<template>
  <div class="container">
    <h2>Mentor - Verify</h2>
    <hr>
    <VerifyList :collection="collection" />
  </div>
</template>

<!-- // // // //  -->

<script>
import VerifyList from '../components/VerifyList'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    VerifyList
  },
  metaInfo: {
    title: 'Mentor - Verify'
  },
  created () {
    this.fetch()
  },
  methods: mapActions({
    fetch: 'attendance/fetchUnverifiedAttendance'
  }),
  computed: mapGetters({
    collection: 'attendance/unverifiedAttendance',
    loading: 'attendance/loadingUnverifiedAttendance'
  })
}
</script>


