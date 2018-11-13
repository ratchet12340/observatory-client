
<template>
  <div class="card mb-3">
    <div class="card-body">

      <!-- Bootstrap Modal Component -->
      <b-modal :id="'destroyModal'"
        :title="'Destroy User Registration?'"
        @ok="onConfirmDestroy(model)"
        header-bg-variant='dark'
        header-text-variant='light'
        body-bg-variant='dark'
        body-text-variant='light'
        footer-bg-variant='danger'
        footer-text-variant='light'
        ok-variant='danger'
        ok-title='DESTROY'
        cancel-title='Cancel'
        cancel-variant='dark'
      >
        <p class="text-left">Are you sure you want to destroy this User Registration?</p>
      </b-modal>

      <div class="row">
        <div class="col-sm-8">
          <h2>
            {{ header || 'User Registration Detail' }}
          </h2>
        </div>
        <div class="col-sm-4 text-right">

          <!-- Edit -->
          <b-button size="sm" variant="outline-warning" :to="'/user_registrations/' + model._id + '/edit'">
            <i class="fa fa-fw fa-pencil"></i>
          </b-button>

          <!-- Destroy -->
          <b-button size="sm" variant="outline-danger" v-b-modal="'destroyModal'">
            <i class="fa fa-fw fa-trash"></i>
          </b-button>

        </div>
      </div>

      <table class="table" v-if='!fetching'>

        <!-- Table Header -->
        <tbody>
          <tr>
            <td>Credits</td>
            <td>{{model.credits}}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{{model.status}}</td>
          </tr>
          <tr>
            <td>Schedule Conflict</td>
            <td>
              <span>
                <i class="fa fa-fw fa-check-square-o" v-if="model.schedule_conflict"></i>
                <i class="fa fa-fw fa-square-o" v-if="!model.schedule_conflict"></i>
              </span>
            </td>
          </tr>
          <tr>
            <td>Completed URP Form</td>
            <td>
              <span>
                <i class="fa fa-fw fa-check-square-o" v-if="model.has_completed_urp_form"></i>
                <i class="fa fa-fw fa-square-o" v-if="!model.has_completed_urp_form"></i>
              </span>
            </td>
          </tr>
          <tr>
            <td>Require Wheelchair Accessible Room</td>
            <td>
              <span>
                <i class="fa fa-fw fa-check-square-o" v-if="model.requires_wheelchair_accessible_room"></i>
                <i class="fa fa-fw fa-square-o" v-if="!model.requires_wheelchair_accessible_room"></i>
              </span>
            </td>
          </tr>
          <tr>
            <td>Mentor Preferences</td>
            <td>{{model.mentor_preference_ids.length }} Mentor Preferences</td>
          </tr>
        </tbody>

      </table>
      <Loading v-else />

    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapActions } from 'vuex'
import Loading from '@/components/Loading'

export default {
  props: ['id', 'model', 'fetching', 'header'],
  name: 'UserRegistrationShowWidget',
  components: {
    Loading
  },
  methods: mapActions({
    onConfirmDestroy: 'user_registration/deleteModel'
  })
}
</script>
