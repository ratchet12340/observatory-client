<template>
  <div class='row'>
    <div class='col-lg-12'>
      <button type="button" class="btn btn-primary" @click="generateAttendanceCode()">
        Generate Attendance Code
      </button>

      <button type="button" class="btn btn-primary" @click="generateBonusCode()">
        Generate Bonus Attendance Code
      </button>

      <p v-if="daycode">
        Attedance Code Succesfully Generated: {{ daycode }}
      </p>

      <p v-else>
        Code Was Not Generated
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      error: false
    }
  },
  methods: mapActions({
    generateAttendanceCode: 'semester/generateAttendanceCode',
    generateBonusCode: 'semester/generateBonusCode'
  }),
  computed: mapGetters({
    daycode: 'semester/daycode'
  })
}
</script>
