
<template>
  <table class="table table-hover table-striped">
    <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Type</th>
        <th scope="col">Attendees</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
      <!-- TODO - break this out into an individual AttendanceChild component -->
      <tr v-for="each in collection">
        <td scope="row">{{ each.date }}</td>
        <td scope="row"></td>
        <td scope="row"></td>
        <td scope="row"></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['collection']
}
</script>
