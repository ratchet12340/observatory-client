<template>
  <div class="row">

    <!-- 'New Project' Button -->
    <div class="col-sm-12">
      <div class="btn-group w-100">
        <a href='/#/projects/new' class="btn btn-lg btn-primary btn-block">
          <i class="fa fa-fw fa-plus mr-1"></i>
          Add Project
        </a>
      </div>
    </div>

    <div class="col-sm-12 mt-3">

      <!-- TODO - abstract into separate component -->
      <div class="card">
        <h6 class="card-header">
          <i class="fa fa-fw fa-folder-open-o"></i>
          My Projects
        </h6>
        <div class="card-body pt-1 pb-1">
          <p class="card-text">
            <dl class="dl-horizontal">
              <!-- My Projects - List -->
              <dd v-for="project in myProjects">
                <a :href=" '#/projects/' + project._id ">{{ project.name }}</a>
              </dd>
              <!-- My Projects - Empty -->
              <dd v-if="!myProjects[0]">
                <a>None Available</a>
              </dd>
            </dl>
          </p>
        </div>
      </div>

      <!-- TODO - abstract into separate component -->
      <div class="card mt-3">
        <h6 class="card-header">
          <i class="fa fa-fw fa-star-o"></i>
          Starred
        </h6>
        <div class="card-body pt-1 pb-1">
          <p class="card-text">
            <dl class="dl-horizontal">
              <!-- My Projects - List -->
              <dd v-for="project in favoriteProjects">
                <a :href=" '#/projects/' + project._id ">{{ project.name }}</a>
              </dd>
              <!-- My Projects - Empty -->
              <dd v-if="!favoriteProjects[0]">
                <a>None Available</a>
              </dd>
            </dl>
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    myProjects: 'project/myProjects',
    menteeProjects: 'project/menteeProjects',
    favoriteProjects: 'project/favoriteProjects'
  }),
  created () {
    // TODO - this into smaller components
    this.$store.dispatch('project/fetchMyProjects')
    this.$store.dispatch('project/fetchFavoriteProjects')
    // TODO - invoke following only if MENTOR
    // this.$store.dispatch('project/fetchMenteeProjects')
  }
}
</script>

