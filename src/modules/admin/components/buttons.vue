<template>
  <div class='col-lg-12'>
    <button type="button" class="btn btn-primary" @click="createNewSemester()">
      <i class="fa fa-fw fa-plus mr-1"></i>
      Create New Semester
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'buttons',
  methods: mapActions({
    createNewSemester: 'semester/create'
  })
}
</script>
