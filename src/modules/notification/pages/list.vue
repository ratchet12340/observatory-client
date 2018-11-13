<template>
  <Loading v-if="fetching" />
  <div class="container" v-else>

    <div class="row">
      <div class="col-md-8">
        <h2>
          <i class="fa fa-square-o"></i>
          Notifications
        </h2>
      </div>

      <div class="col-md-4 text-right">
        <b-button variant="primary" to="/notifications/new">
          <i class="fa fa-fw fa-plus"></i>
          New Notification
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

import ListView from '@/modules/notification/components/NotificationListWidget'
import Loading from '@/components/Loading'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'NotificationList',
  components: {
    Loading,
    ListView
  },
  metaInfo: {
    title: 'Notifications'
  },
  created () {
    return this.fetch()
  },
  computed: mapGetters({
    fetching: 'notification/fetching',
    collection: 'notification/collection'
  }),
  methods: mapActions({
    fetch: 'notification/fetchCollection'
  })
}
</script>
