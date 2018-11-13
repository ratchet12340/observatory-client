<template>
  <Loading v-if="fetching" />
  <div class="container" v-else>
    <div class="row">
      <div class="col-sm-12">
        <h2>User Registration - Edit</h2>
      </div>
    </div>

    <hr>

    <UserRegistrationForm :model="model" />

    <div class="row">
      <div class="col-lg-12 text-right">

        <b-button variant="secondary" to="/user_registrations" class="mr-2">
          <i class="fa fa-fw fa-times"></i>
          Cancel
        </b-button>

        <b-button variant="primary" @click="formSubmit(model)">
          <i class="fa fa-fw fa-plus"></i>
          Update User Registration
        </b-button>

      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters, mapActions } from 'vuex'
import Loading from '@/components/Loading'
import UserRegistrationForm from '@/modules/user_registration/components/UserRegistrationForm'

export default {
  props: ['id'],
  name: 'user_registration_edit',
  metaInfo: {
    title: 'User Registration - Edit'
  },
  components: {
    Loading,
    UserRegistrationForm
  },
  data () {
    return {
      fetching: false
    }
  },
  created () {
    this.fetching = true
    this.fetchEditModel(this.id)
    .then(() => { this.fetching = false })
  },
  computed: mapGetters({
    model: 'user_registration/editModel'
    // fetching: 'user_registration/fetching'
  }),
  methods: mapActions({
    fetchEditModel: 'user_registration/fetchEditModel',
    formSubmit: 'user_registration/updateModel'
  })
}
</script>
