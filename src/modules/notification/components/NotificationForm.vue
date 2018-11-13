<template>
  <div class='row'>
    <div class="col-lg-6">
      <div class="form-group">
        <label class='mb-0'>
          Subject
          <span class='text-danger'>*</span>
        </label>
        <small class="form-text text-muted mb-2">The text that appears in the subject line of the Notification</small>
        <input type="text" class="form-control" placeholder="Subject" v-model="model.subject">
      </div>
    </div>
    <div class="col-lg-6">
      <div class="form-group">
        <label class='mb-0'>
          Body
          <span class='text-danger'>*</span>
        </label>
        <small class="form-text text-muted mb-2">The body of the notification</small>
        <input type="text" class="form-control" placeholder="Body" v-model="model.body">
      </div>
    </div>
    <div class="col-lg-6">
      <div class="form-group">
        <label class='mb-0'>
          Dismissed
        </label>
        <input type="checkbox" v-model="model.dismissed">
      </div>
    </div>

    <div class="col-lg-6">
      <div class="form-group">
        <label class='mb-0'>
          User
        </label>
        <select type="text" class="form-control" placeholder="User" v-model="model.user_id">
          <option :value="user._id" v-for="user in users">
            {{ user.email }}
          </option>
        </select>
      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import InputTag from 'vue-input-tag'

export default {
  name: 'notification_form',
  props: ['model'],
  components: {
    InputTag
  },
  created () {
    this.$store.dispatch('user/fetchCollection')
  },
  computed: {
    users () {
      return this.$store.getters['user/collection']
    }
  }
}
</script>
