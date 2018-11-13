<template>
    <div class="container">
      <PageHeader title="Attendance Admin" />
      <GenerateAttendance/>
      <hr>
      <h3>Attendance Days:</h3>
      <List :collection="collection"/>
    </div>
</template>

<!-- // // // //  -->

<script>
import List from '../components/attendance_list'
import GenerateAttendance from '../components/generate_attendance'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    List,
    GenerateAttendance
  },
  metaInfo: {
    title: 'Admin - Attendance'
  },
  created () {
    this.fetch()
  },
  methods: mapActions({
    fetch: 'attendance/fetchSemesterAttendance'
  }),
  computed: mapGetters({
    collection: 'attendance/collection'
  })
}
</script>
