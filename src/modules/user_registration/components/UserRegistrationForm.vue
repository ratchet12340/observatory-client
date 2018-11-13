<template>
  <div class='row'>
    <div class="col-lg-6">
      <div class="form-group">
        <label class='mb-0'>
          Credits
<span class='text-danger'>*</span>        </label>
        <small class="form-text text-muted mb-2">The number of credits you&#39;re pursuing in RCOS this semester</small>
        <input type="text" class="form-control" placeholder="Credits" v-model="model.credits">
      </div>
    </div>
    <div class="col-lg-6">
      <div class="form-group">
        <label class='mb-0'>
          Status
<span class='text-danger'>*</span>        </label>
        <small class="form-text text-muted mb-2">The status of the User Registraton</small>
        <input type="text" class="form-control" placeholder="Status" v-model="model.status">
      </div>
    </div>
    <div class="col-lg-6">
      <div class="form-group">
        <label class='mb-0'>
          Schedule Conflict
        </label>
        <small class="form-text text-muted mb-2">Whether or not you have a schedule conflict at 4pm on Tuesdays</small>
        <input type="checkbox" v-model="model.schedule_conflict">
      </div>
    </div>
    <div class="col-lg-6">
      <div class="form-group">
        <label class='mb-0'>
          Completed URP Form
        </label>
        <small class="form-text text-muted mb-2">Has the student completed their URP form yet?</small>
        <input type="checkbox" v-model="model.has_completed_urp_form">
      </div>
    </div>
    <div class="col-lg-6">
      <div class="form-group">
        <label class='mb-0'>
          Require Wheelchair Accessible Room
        </label>
        <small class="form-text text-muted mb-2">Whether or not you require a wheelchair accessible room for small group</small>
        <input type="checkbox" v-model="model.requires_wheelchair_accessible_room">
      </div>
    </div>

    <div class="col-lg-6">
      <div class="form-group">
        <label class='mb-0'>
          Mentor Preference
        </label>
        <select type="text" multiple class="form-control" placeholder="Mentor Preference" v-model="model.mentor_preference_ids">
          <option :value="user._id" v-for="user in mentor_preferences">{{ user.email }}</option>
        </select>
      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import InputTag from 'vue-input-tag'

export default {
  name: 'user_registration_form',
  props: ['model'],
  components: {
    InputTag
  },
  created () {
    this.$store.dispatch('user/fetchCollection')
  },
  computed: {
    mentor_preferences () {
      return this.$store.getters['user/collection']
    }
  }
}
</script>
