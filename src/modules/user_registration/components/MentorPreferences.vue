
<template>
  <div class="card mb-3">
    <div class="card-body">
      <p class="lead">Mentor Preferences</p>
      <table class="table table-hover">

        <!-- Table Header -->
        <thead>
          <th>
            E-Mail
            <i class="fa fa-fw fa-question-circle-o" v-b-tooltip.hover.bottom title="E-Mail address associated with this Contact." ></i>
          </th>
          <th>
            Username
            <i class="fa fa-fw fa-question-circle-o" v-b-tooltip.hover.bottom title="The user&#39;s username" ></i>
          </th>
          <th></th>
        </thead>

        <!-- Table Body -->
        <tbody>

          <!-- Empty Table Row -->
          <tr class='table-warning' v-if="!collection[0]">
            <td>Empty</td>
            <td></td>
            <td></td>
          </tr>

          <tr v-for="m in collection" :key="m._id">
            <td>
              <router-link :to=" '/users/' + m._id ">
                {{ m.email }}
              </router-link>
            </td>
            <td>
              <router-link :to=" '/users/' + m._id ">
                {{ m.username }}
              </router-link>
            </td>

            <!-- Edit User-->
            <td class='text-right'>
              <b-button size="sm" variant="outline-primary" :to=" '/users/' + m._id">
                <i class="fa fa-fw fa-eye"></i>
              </b-button>

              <b-button size="sm" variant="outline-warning" :to=" '/users/' + m._id + '/edit' ">
                <i class="fa fa-fw fa-pencil"></i>
              </b-button>

              <b-button size="sm" variant="outline-danger" v-b-modal="'modal_' + m._id">
                <i class="fa fa-fw fa-trash"></i>
              </b-button>

              <!-- Bootstrap Modal Component -->
              <b-modal :id="'modal_' + m._id"
                :title="'Destroy User?'"
                @ok="onConfirmDestroy(m)"
                ok-variant='danger'
                ok-title='DESTROY'
                cancel-title='Cancel'
              >
                <p class="text-left">Are you sure you want to destroy this User?</p>
              </b-modal>

            </td>
          </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapActions } from 'vuex'

export default {
  props: ['collection'],
  methods: mapActions({
    onConfirmDestroy: 'user/deleteModel'
  })
}
</script>
