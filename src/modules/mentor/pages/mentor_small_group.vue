
<template>
  <div class="container">
    <h2>Mentor - Small Group</h2>
    <hr>
    <p class="lead">TODO</p>
    <pre>{{model}}</pre>
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  metaInfo: {
    title: 'Mentor - Small Group'
  },
  created () {
    this.fetch()
  },
  methods: mapActions({
    fetch: 'smallgroup/fetchSmallgroup'
  }),
  computed: mapGetters({
    model: 'smallgroup/model'
  })
}
</script>


