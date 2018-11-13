
<template>
  <div class="card mt-3">
    <div class="card-body">
      <h4 class="card-title">
        Bio
      </h4>
      <p class="card-text">{{ userBio }}</p>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
export default {
  props: ['model'],
  computed: {
    userBio () {
      return this.model.bio || 'An awesome RCOS developer!'
    }
  }
}
</script>
