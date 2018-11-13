<template>
  <div class="container">

    <div class="row">
      <div class="col-sm-12">
        <h2>User Registration - New</h2>
      </div>
    </div>

    <hr>

    <UserRegistrationForm :model="model" />
    <div class="row">
      <div class="col-lg-12 text-right">

        <b-button to="/user_registrations" variant="light" class="mr-2">
          <i class="fa fa-fw fa-times"></i>
          Cancel
        </b-button>

        <b-button variant="primary" @click="formSubmit(model)">
          <i class="fa fa-fw fa-plus"></i>
          Create User Registration
        </b-button>

      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import UserRegistrationForm from '@/modules/user_registration/components/UserRegistrationForm'

export default {
  name: 'UserRegistrationNew',
  metaInfo: {
    title: 'User Registration - New'
  },
  components: {
    UserRegistrationForm
  },
  created () {
    this.resetNewModel()
  },
  computed: mapGetters({
    model: 'user_registration/newModel'
  }),
  methods: {
    ...mapActions({
      formSubmit: 'user_registration/createModel'
    }),
    ...mapMutations({
      resetNewModel: 'user_registration/resetNewModel'
    })
  }
}
</script>
