<template>
  <Loading :loading="fetching">
    <div class="container">
      <PageHeader :title="project.name" />

      <!-- TODO - abstract into ProjectControls component -->
      <ProjectControls :project="project"/>

      <hr>

      <div class="row">
        <div class="col-sm-12">
          <p class="lead">TODO - 'Tech Tags' go here</p>
        </div>
      </div>

      <Contributors/>

      <p class="lead">{{ project.name }}</p>
      <a class='btn btn-secondary' href="/#/projects/1/edit">Edit Project</a>
    </div>
  </Loading>
</template>

<!-- // // // //  -->

<script>
import Loading from '@/components/Loading'
import ProjectControls from '../components/ProjectControls'
import Contributors from '../components/Contributors'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['id'],
  components: {
    Loading,
    ProjectControls,
    Contributors
  },
  metaInfo: {
    title: 'Project Show'
  },
  created () {
    this.fetch(this.id)
  },
  methods: mapActions({
    fetch: 'project/fetchModel'
  }),
  computed: mapGetters({
    project: 'project/model',
    fetching: 'project/fetching'
  })
}
</script>
