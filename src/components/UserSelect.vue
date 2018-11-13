<template>
  <div class="form-group">
    <label>User</label>
    <select ref="select" v-on:input="updateValue($event.target.value)" class="form-control">
      <option :value="user._id" v-for="user in userCollection" :key="user._id">
        {{ user.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  created () {
    return this.fetch()
  },
  methods: {
    ...mapActions({
      fetch: 'user/fetchCollection'
    }),
    // Propagates the input event
    updateValue (value) {
      // TODO - handle different types of inputs
      // If the value was not already normalized,
      // manually override it to conform
      this.$refs.select.value = value
      // Emit the number value through the input event
      // TODO - handle Number input
      this.$emit('input', value)
    }
  },
  computed: mapGetters({
    userCollection: 'user/collection'
  })
}
</script>
