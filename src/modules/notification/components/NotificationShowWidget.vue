
<template>
  <div class="card mb-3">
    <div class="card-body">

      <!-- Bootstrap Modal Component -->
      <b-modal :id="'destroyModal'"
        :title="'Destroy Notification?'"
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
        <p class="text-left">Are you sure you want to destroy this Notification?</p>
      </b-modal>

      <div class="row">
        <div class="col-sm-8">
          <h2>
            {{ header || 'Notification Detail' }}
          </h2>
        </div>
        <div class="col-sm-4 text-right">

          <!-- Edit -->
          <b-button size="sm" variant="outline-warning" :to="'/notifications/' + model._id + '/edit'">
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
            <td>Subject</td>
            <td>{{model.subject}}</td>
          </tr>
          <tr>
            <td>Body</td>
            <td>{{model.body}}</td>
          </tr>
          <tr>
            <td>Dismissed</td>
            <td>
              <span>
                <i class="fa fa-fw fa-check-square-o" v-if="model.dismissed"></i>
                <i class="fa fa-fw fa-square-o" v-if="!model.dismissed"></i>
              </span>
            </td>
          </tr>
          <tr>
            <td>User</td>
            <td v-if="model.user_id">
              <router-link :to="'/users/' + model.user_id">
                {{model.user.email}}
              </router-link>
            </td>
            <td v-else>N/A</td>
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
  name: 'NotificationShowWidget',
  components: {
    Loading
  },
  methods: mapActions({
    onConfirmDestroy: 'notification/deleteModel'
  })
}
</script>
