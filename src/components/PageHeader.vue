<template>
  <div class="row pt-3" v-if="hasSlotData">
    <div class="col-sm-8">
      <h3>{{ title }}</h3>
    </div>

    <div class="col-sm-4 text-right">
      <slot></slot>
    </div>

    <div class="col-sm-12">
      <hr>
    </div>
  </div>

  <div class="row pt-3" v-else>
    <div class="col-sm-12">
      <h3>{{ title }}</h3>
      <hr>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
export default {
  props: ['title'],
  computed: {
    hasSlotData () {
      return this.$slots.default
    }
  }
}
</script>
