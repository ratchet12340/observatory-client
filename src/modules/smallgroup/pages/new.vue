
<template>
  <div class="container">
    <PageHeader title="New Small Group" />
    <div class="row">
      <div class="col-lg-12">
        <p class="lead">TODO - implement SmallGroup Form here</p>
        <pre class="bg-dark text-light">{{model}}</pre>
        <button class="btn btn-success" @click="create()">
          Create
        </button>
      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import PageHeader from '@/components/PageHeader'
import { mapActions, mapGetters } from 'vuex'

export default {
  metaInfo: {
    title: 'Small Groups'
  },
  components: {
    PageHeader
  },
  created () {
    this.resetNew()
  },
  methods: mapActions({
    create: 'smallgroup/create',
    resetNew: 'smallgroup/resetNewModel'
  }),
  computed: mapGetters({
    model: 'smallgroup/newModel'
  })
}
</script>


