
<template>
  <div class="row" v-if="collection[0]">
    <div class='col-lg-2 mb-4' v-for="model in collection" :key="model._id">
      <Child :model="model" />
    </div>
  </div>
  <div class='row' v-else>
    <div class="col-sm-12">
      <div class="card card-body d-flex align-items-center justify-content-center">
        <p class="lead mb-0">
          <i class="fa fa-exclamation-circle fa-lg text-warning mr-2"></i>
          No Users found matching that query
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import Child from './child.vue'

  export default {
    props: ['collection'],
    components: {
      Child
    }
  }
</script>
