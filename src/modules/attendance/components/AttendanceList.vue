<template>
  <table class="table table-hover">
    <thead>
      <th>Date</th>
      <th>Type</th>
      <th>Group</th>
      <th>Attendance</th>
      <th>Verified</th>
    </thead>
    <tbody>
      <AttendanceChild v-for="m in collection" :key="m.date" :model="m"/>
    </tbody>
  </table>
</template>

<script>
  import AttendanceChild from './AttendanceChild.vue'
  export default {
    name: 'AttendanceList',
    props: ['collection'],
    components: {
      AttendanceChild
    }
  }
</script>
