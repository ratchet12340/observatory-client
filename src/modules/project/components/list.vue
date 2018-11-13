
<template>
  <div class='row' v-if="collection[0]">
    <div v-for="m in collection" :key="m._id" class='col-lg-12'>
      <div class="card card-body project-card mb-3" >

        <div class="row">
          <div class="col-lg-12">
            <h4 class="card-title">
              <i class="fa fa-fw fa-star text-warning" @click="toggleFavorite(m)" v-if="m.isFavorite"></i>
              <i class="fa fa-fw fa-star-o" @click="toggleFavorite(m)" v-else></i>
              <a v-bind:href="'/#/projects/' + m._id">{{m.name}}</a>
            </h4>
          </div>
          <div class="col-lg-12">
            <span v-for="t in m.tech" class="badge badge-primary mr-2">{{ t }}</span>
          </div>
        </div>

        <p class="card-text mt-2">{{m.description}}</p>

        <div class="row">
          <div class="col-lg-12">
            <div class="btn-group">
              <a class="btn btn-sm btn-outline-dark" target="_blank" :href="'https://github.com/' + m.githubUsername + '/' + m.githubProjectName">
                <i class="fa fa-fw fa-github mr-1"></i>
                Repository
              </a>

              <a class="btn btn-sm btn-outline-dark" :href="'/#/projects/' + m._id + '/blog'">
                <i class="fa fa-fw fa-newspaper-o mr-1"></i>
                Blog
              </a>

              <a class="btn btn-sm btn-outline-dark" target="_blank" :href="m.websiteUrl" v-if="m.websiteUrl">
                <i class="fa fa-fw fa-home mr-1"></i>
                Website
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <div class='row' v-else>
    <div class="col-sm-12">
      <div class="card card-body d-flex align-items-center justify-content-center">
        <p class="lead mb-0">
          <i class="fa fa-exclamation-circle fa-lg text-warning mr-2"></i>
          No Projects found matching that query
        </p>
      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
// import _ from 'lodash'
import { mapActions } from 'vuex'

export default {
  props: ['collection'],
  // created () {
  //   _.each(this.collection, (m) => { this.$store.dispatch('project/isFavorite', m) })
  // },
  methods: mapActions({
    toggleFavorite: 'project/toggleFavorite',
    isFavorite: 'project/isFavorite'
  })
}
</script>

<style type="text/css">
  .project-card {
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
  }
</style>
