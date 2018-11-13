<template>
  <Loading v-if="fetching" />
  <div class="container" v-else>

    <div class="row">
      <div class="col-md-8">
        <h2>
          <i class="fa fa-square-o"></i>
          User Registrations
        </h2>
      </div>

      <div class="col-md-4 text-right">
        <b-button variant="primary" to="/user_registrations/new">
          <i class="fa fa-fw fa-plus"></i>
          New User Registration
        </b-button>
      </div>
    </div>

    <!-- List View -->
    <div class="row">
      <div class="col-lg-12">
        <ListView :collection="collection" />
      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>

import ListView from '@/modules/user_registration/components/UserRegistrationListWidget'
import Loading from '@/components/Loading'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'UserRegistrationList',
  components: {
    Loading,
    ListView
  },
  metaInfo: {
    title: 'User Registrations'
  },
  created () {
    return this.fetch()
  },
  computed: mapGetters({
    fetching: 'user_registration/fetching',
    collection: 'user_registration/collection',
    totalRows: 'user_registration/count',
    perPage: 'user_registration/pageSize',
    currentPage: 'user_registration/currentPage'
  }),
  methods: mapActions({
    fetch: 'user_registration/fetchCollection',
    goToPage: 'user_registration/goToPage'
  })
}
</script>
