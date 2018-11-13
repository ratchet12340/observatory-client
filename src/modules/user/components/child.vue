<template>
  <div class="card">
    <a :href="'/#/users/' + model._id">
      <span class="badge user-badge badge-dark" v-if="model.role === 'admin'">Coordinator</span>
      <span class="badge user-badge badge-dark" v-else-if="model.role === 'mentor'">Mentor</span>
      <!-- <span class="badge user-badge badge-primary" v-else>Student</span> -->
      <img class="card-img-top" :src="model.avatar"/>
    </a>

    <div class="card-body text-center py-2 px-2">
      <a :href="'/#/users/' + model._id">
        {{model.name}}
      </a>
    </div>

  </div>
</template>

<script>
export default {
  props: ['model']
}
</script>

<style type="text/css">
  span.badge.user-badge {
    position: absolute;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
  }
</style>
