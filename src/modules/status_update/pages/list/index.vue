<template>
  <div class="container">
    <PageHeader title="Blog" />

    <div class="row">
      <div class="col-lg-12">

        <!-- Fetching -->
        <!-- TODO - phase this out in favor of Loading -->
        <p class='lead' v-if="fetching">
          <i class="fa fa-2x fa-spin fa-spinner"></i>
        </p>

        <!-- EmptyView -->
        <!-- TODO - abstract into ListView -->
        <p class='lead' v-if="!collection[0]">
          EMPTY
        </p>

        <a class="btn btn-primary" href='#/blogs/new'>
          <i class="fa fa-plus mr-2"></i>
          New Blog Post
        </a>

      </div>
    </div>

    <!-- ListView -->
    <ListView :collection="collection"/>

  </div>
</template>

<!-- // // // //  -->

<script>
import ListView from './components/list.vue'
import { mapGetters } from 'vuex'

export default {
  metaInfo: {
    title: 'Blog - List'
  },
  components: {
    ListView
  },
  mounted () {
    return this.$store.dispatch('blog/fetchCollection')
  },
  computed: mapGetters({
    fetching: 'blog/fetching',
    collection: 'blog/collection'
  })
}
</script>
