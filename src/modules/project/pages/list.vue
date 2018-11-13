<template>
  <div class="container">
    <PageHeader :title="headerText" />
    <Search module="project" />
    <Pagination module="project" />

    <div class="row">
      <div :class="listCss">
        <Loading :loading="fetching">
          <ListView :collection="collection"/>
        </Loading>
      </div>

      <div class="col-lg-3 pl-lg-0" v-if="isAuthenticated">
        <Sidebar/>
      </div>

    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import ListView from '../components/list.vue'
import Loading from '@/components/Loading'
import Search from '@/components/Search'
import Pagination from '@/components/Pagination'
import Sidebar from '../components/pinned.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  metaInfo: {
    title: 'Projects'
  },
  created () {
    return this.fetch()
  },
  methods: mapActions({
    fetch: 'project/fetchCollection'
  }),
  computed: {
    ...mapGetters({
      collection: 'project/paginatedCollection',
      fetching: 'project/fetching',
      isAuthenticated: 'auth/is_authenticated'
    }),
    headerText () {
      if (this.$store.getters['project/showingInactive']) return 'Past Projects'
      return 'Current Projects'
    },
    listCss () {
      if (this.$store.getters['auth/is_authenticated']) return 'col-lg-9'
      return 'col-lg-12'
    }
  },
  components: {
    ListView,
    Search,
    Loading,
    Pagination,
    Sidebar
  }
}
</script>
