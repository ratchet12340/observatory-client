
<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-body">
          <p class="lead">Contributors</p>
          <Loading :loading="fetching">
            <small class="text-muted" v-for='user in contributors'>
              {{ user.name }}
            </small>
          </Loading>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import Loading from '@/components/Loading'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Loading
  },
  created () {
    this.fetch()
  },
  methods: mapActions({
    fetch: 'project/fetchContributors'
  }),
  computed: mapGetters({
    fetching: 'project/fetchingContributors',
    contributors: 'project/contributors'
  })
}
</script>


