<template>
  <div class="container">

    <div class="row">
      <div class="col-sm-12">
        <h2>Notification - New</h2>
      </div>
    </div>

    <hr>

    <NotificationForm :model="model" />
    <div class="row">
      <div class="col-lg-12 text-right">

        <b-button to="/notifications" variant="light" class="mr-2">
          <i class="fa fa-fw fa-times"></i>
          Cancel
        </b-button>

        <b-button variant="primary" @click="formSubmit(model)">
          <i class="fa fa-fw fa-plus"></i>
          Create Notification
        </b-button>

      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import NotificationForm from '@/modules/notification/components/NotificationForm'

export default {
  name: 'NotificationNew',
  metaInfo: {
    title: 'Notification - New'
  },
  components: {
    NotificationForm
  },
  created () {
    this.resetNewModel()
  },
  computed: mapGetters({
    model: 'notification/newModel'
  }),
  methods: {
    ...mapActions({
      formSubmit: 'notification/createModel'
    }),
    ...mapMutations({
      resetNewModel: 'notification/resetNewModel'
    })
  }
}
</script>
