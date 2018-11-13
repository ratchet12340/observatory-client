<template>
  <div class="container">
    <PageHeader title="New Blog Post"/>
    <BlogForm :onSubmit="create" />
  </div>
</template>

 <!-- // // // //  -->

<script>
import BlogForm from '@/modules/status_update/components/StatusUpdateForm'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'layout',
  components: {
    BlogForm
  },
  created () {
    return this.resetNewModel()
  },
  methods: mapActions({
    create: 'blog/create',
    resetNewModel: 'blog/resetNewModel'
  }),
  computed: mapGetters({
    model: 'blog/newModel'
  })
}
</script>


