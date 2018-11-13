<template>
  <div class="row">
    <div class="col-lg-12">
      <UserSelect v-model="user_id" />
      {{ user_id }}
      <button class="btn btn-success" @click="addMember({ smallGroupId: model._id, userId: user_id })">
        Add Member
      </button>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import UserSelect from '@/components/UserSelect'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    UserSelect
  },
  data () {
    return { user_id: '' }
  },
  methods: mapActions({
    addMember: 'smallgroup/addSmallGroupMember'
  }),
  computed: mapGetters({
    model: 'smallgroup/model'
  })
}
</script>

