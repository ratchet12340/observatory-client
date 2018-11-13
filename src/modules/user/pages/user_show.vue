<template>
  <Loading :loading="fetching">
    <div class="container">
      <PageHeader :title="model.name" />

      <div class="row">
        <div class="col-sm-12 col-lg-3">
          <Sidebar :model="model"/>

          <a class="btn btn-block btn-warning mt-3" :href=" '#/users/' + model._id + '/edit' " v-if="showEditButton">
            <i class="fa fa-pencil mr-2"></i>
            Edit Profile
          </a>
        </div>

        <div class="col-sm-12 col-lg-9 pl-lg-0 mt-3 mt-lg-0">
          <Tech :model="model"/>
          <Bio :model="model"/>
          <Projects :model="model"/>
          <Attendance :model="model"/>
        </div>

      </div>

    </div>
  </Loading>
</template>

<!-- // // // //  -->

<script>
import Loading from '@/components/Loading'
import Sidebar from '../components/sidebar'
import Tech from '../components/tech'
import Bio from '../components/bio'
import Projects from '../components/projects'
import Attendance from '../components/attendance'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['id'],
  components: {
    Loading,
    Sidebar,
    Tech,
    Bio,
    Projects,
    Attendance
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/is_authenticated',
      currentUser: 'auth/current_user',
      model: 'user/model',
      fetching: 'user/fetching'
    }),
    showEditButton () {
      if (this.isAuthenticated && this.currentUser._id === this.model._id) return true
      return false
    }
  },
  metaInfo: {
    title: 'User Profile'
  },
  created () {
    this.fetch(this.id)
  },
  methods: mapActions({
    fetch: 'user/fetchUser'
  })
}
</script>
