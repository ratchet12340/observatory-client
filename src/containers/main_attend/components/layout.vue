<template>
  <div class="container">
    <PageHeader title="Attendance" />

    <CodeInput/>

    <div v-if="unverified">Please verify your attendance with a mentor.</div>
    <div v-if="!unverified">Attendance code succesfully submitted.</div>

    <h4>Previous Attendance:</h4>
    <TableHeader/>
    <Explore :collection="collection"/>
  </div>
</template>

<!-- // // // //  -->

<script>
import CodeInput from './input.vue'
import TableHeader from './table_header'
import Explore from './explore.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'layout',
  components: {
    CodeInput,
    TableHeader,
    Explore
  },
  created () {
    this.fetchCollection()
  },
  methods: mapActions({
    fetchCollection: 'attendance/fetchCollection'
  }),
  computed: {
    ...mapGetters({
      collection: 'attendance/collection',
      unverified: 'attendance/unverified',
      error: 'attendance/error'
    })
  }
}
</script>
