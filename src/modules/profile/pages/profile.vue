<template>
  <Loading :loading="!model._id">
    <div class="container">
      <PageHeader title="Dashboard" />

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
          <!-- <Projects :model="model"/> -->
          <Attendance :model="model"/>
        </div>

      </div>

    </div>
  </Loading>
</template>

<!-- // // // //  -->

<script>
import Loading from '@/components/Loading'
import Sidebar from '@/modules/user/components/sidebar'
import Tech from '@/modules/user/components/tech'
import Bio from '@/modules/user/components/bio'
import Projects from '@/modules/user/components/projects'
import Attendance from '@/modules/user/components/attendance'
import { mapGetters, mapActions } from 'vuex'

export default {
  metaInfo: {
    title: 'Profile'
  },
  components: {
    Loading,
    Sidebar,
    Tech,
    Bio,
    Projects,
    Attendance
  },
  mounted () {
    if (!this.isAuthenticated) {
      return this.$router.push('/auth/login')
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/is_authenticated',
      model: 'auth/current_user',
      fetching: 'user/fetching'
    }),
    showEditButton () {
      if (this.isAuthenticated) return true
      return false
    }
  },
  methods: mapActions({
    fetch: 'user/fetchUser'
  })
}
</script>
