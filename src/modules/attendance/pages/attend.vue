<template>
  <div class="container">
    <PageHeader title="Attendance" />

    <AttendanceCodeInput/>

    <div class="row">
      <div class="col-lg-12">
        <h4>Attendance History:</h4>
        <AttendanceList :collection="collection"/>
      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import AttendanceCodeInput from '../components/AttendanceCodeInput'
import AttendanceList from '../components/AttendanceList'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AttendanceView',
  components: {
    AttendanceCodeInput,
    AttendanceList
  },
  created () {
    this.fetchCollection()
  },
  methods: mapActions({
    fetchCollection: 'attendance/fetchUserAttendance'
  }),
  computed: mapGetters({
    collection: 'attendance/collection'
  })
}
</script>
