<template>
  <Loading v-if="fetching" />
  <div class="container" v-else>

    <UserRegistrationShowWidget :model="model" :fetching="fetching" />

    <div class="row">
      <div class="col-lg-12">
        <MentorPreferences :collection="mentor_preferences" />
      </div>

    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters, mapActions } from 'vuex'
import Loading from '@/components/Loading'
import UserRegistrationShowWidget from '@/modules/user_registration/components/UserRegistrationShowWidget'
import MentorPreferences from '@/modules/user_registration/components/MentorPreferences'

export default {
  props: ['id'],
  name: 'user_registration_show',
  metaInfo: {
    title: 'User Registrations - Show'
  },
  components: {
    MentorPreferences,
    UserRegistrationShowWidget,
    Loading
  },
  created () {
    this.fetch(this.id)
    this.fetchMentorPreferences(this.id)
  },
  methods: mapActions({
    fetchMentorPreferences: 'user_registration/fetchMentorPreferences',
    fetch: 'user_registration/fetchModel',
    onConfirmDestroy: 'user_registration/deleteModel'
  }),
  computed: mapGetters({
    mentor_preferences: 'user_registration/mentor_preferences',
    model: 'user_registration/model',
    fetching: 'user_registration/fetching'
  })
}
</script>
