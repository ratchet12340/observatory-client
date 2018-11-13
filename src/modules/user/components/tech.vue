<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">
        Tech
      </h4>
      <!-- <input-tag placeholder="Vue.js" :tags="model.tech"></input-tag> -->
      <span v-for="t in model.tech" class="badge badge-primary p-2 mr-2" :key="t" v-if="model.tech[0]">
        {{ t }}
      </span>

      <span class="badge badge-secondary p-2 mr-2" v-if="!model.tech[0]">
        No tech is low-tech
      </span>

    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import InputTag from 'vue-input-tag'

export default {
  props: ['model'],
  components: { InputTag }
}
</script>
