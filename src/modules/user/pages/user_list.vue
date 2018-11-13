
<template>
  <div class="container">
    <PageHeader title="Developers" />
    <Search module="user" />
    <Loading :loading="fetching">
      <List :collection="collection"/>
    </Loading>
  </div>
</template>

<!-- // // // //  -->

<script>
import Loading from '@/components/Loading'
import Search from '@/components/Search'
import List from '../components/list.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Loading,
    Search,
    List
  },
  metaInfo: {
    title: 'Developers'
  },
  computed: mapGetters({
    fetching: 'user/fetching',
    collection: 'user/filteredCollection'
  }),
  created () {
    return this.$store.dispatch('user/fetchCollection')
  }
}
</script>
