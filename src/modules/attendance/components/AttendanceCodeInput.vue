<template>
  <b-input-group class='pt-3 pb-4'>
    <b-form-input v-model="code"></b-form-input>
    <b-btn variant="outline-success" @click="submitCode({ code })">Submit Attendance Code</b-btn>
  </b-input-group>
</template>

<!-- // // // //  -->

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AttendanceCodeInput',
  data () {
    return {
      code: ''
    }
  },
  methods: mapActions({
    submitCode: 'attendance/submitCode'
  })
}
</script>
