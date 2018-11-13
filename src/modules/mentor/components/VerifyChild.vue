<template>
  <tr>
    <td>{{ model.user.name }}</td>
    <td>{{ model.date }}</td>
    <td>
      <button class='btn btn-sm btn-outline-success' @click="verifyAttendance(model._id)">
        Verify
      </button>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['model'],
  methods: mapActions({
    verifyAttendance: 'attendance/verifyAttendance'
  })
}
</script>
