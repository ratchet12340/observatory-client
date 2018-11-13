<template>
  <div class="container">
    <PageHeader title="Small Group Show" />
    <AddMember />
    <Loading :loading="fetching">
      <!-- <LayoutView :model="model"/> -->
      <!-- <pre>{{ model }}</pre> -->
      <MemberList v-if="!fetchingMembers"/>
    </Loading>
  </div>
</template>

<!-- // // // //  -->

<script>
import Loading from '@/components/Loading'
import AddMember from '../components/AddMember'
import MemberList from '../components/MemberList'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['id'],
  components: {
    Loading,
    MemberList,
    AddMember
  },
  metaInfo: {
    title: 'Small Group'
  },
  created () {
    this.fetch(this.id)
    .then(this.fetchMembers(this.id))
  },
  methods: mapActions({
    fetch: 'smallgroup/fetchSmallGroupById',
    fetchMembers: 'smallgroup/fetchSmallGroupMembers'
  }),
  computed: mapGetters({
    model: 'smallgroup/model',
    fetching: 'smallgroup/fetching',
    fetchingMembers: 'smallgroup/fetchingSmallGroupMembers'
  })
}
</script>

