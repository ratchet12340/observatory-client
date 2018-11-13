<template>
  <table class="table table-hover">

    <!-- Table Header -->
    <thead>
      <th>
        Credits
        <i class="fa fa-fw fa-question-circle-o" v-b-tooltip.hover.bottom title="The number of credits you&#39;re pursuing in RCOS this semester" ></i>
      </th>
      <th>
        Status
        <i class="fa fa-fw fa-question-circle-o" v-b-tooltip.hover.bottom title="The status of the User Registraton" ></i>
      </th>
      <th>
        Schedule Conflict
        <i class="fa fa-fw fa-question-circle-o" v-b-tooltip.hover.bottom title="Whether or not you have a schedule conflict at 4pm on Tuesdays" ></i>
      </th>
      <th>
        Completed URP Form
        <i class="fa fa-fw fa-question-circle-o" v-b-tooltip.hover.bottom title="Has the student completed their URP form yet?" ></i>
      </th>
      <th>
        Require Wheelchair Accessible Room
        <i class="fa fa-fw fa-question-circle-o" v-b-tooltip.hover.bottom title="Whether or not you require a wheelchair accessible room for small group" ></i>
      </th>
      <th>Mentor Preferences</th>
      <th></th>
    </thead>

    <!-- Table Body -->
    <tbody>

      <!-- Empty Table Row -->
      <tr class='table-warning' v-if="!collection[0]">
        <td>Empty</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr v-for="m in collection" :key="m._id">
        <td>{{m.credits}}</td>
        <td>{{m.status}}</td>
        <td>
          <span>
            <i class="fa fa-fw fa-check-square-o" v-if="m.schedule_conflict"></i>
            <i class="fa fa-fw fa-square-o" v-if="!m.schedule_conflict"></i>
          </span>
        </td>
        <td>
          <span>
            <i class="fa fa-fw fa-check-square-o" v-if="m.has_completed_urp_form"></i>
            <i class="fa fa-fw fa-square-o" v-if="!m.has_completed_urp_form"></i>
          </span>
        </td>
        <td>
          <span>
            <i class="fa fa-fw fa-check-square-o" v-if="m.requires_wheelchair_accessible_room"></i>
            <i class="fa fa-fw fa-square-o" v-if="!m.requires_wheelchair_accessible_room"></i>
          </span>
        </td>
        <td v-if="m.mentor_preference_ids">
          {{ m.mentor_preference_ids.length }} Mentor Preferences
        </td>
        <td v-else>
          None
        </td>
        <!-- Edit User Registration-->
        <td class='text-right'>
          <b-button size="sm" variant="outline-primary" :to=" '/user_registrations/' + m._id">
            <i class="fa fa-fw fa-eye"></i>
          </b-button>

          <b-button size="sm" variant="outline-warning" :to=" '/user_registrations/' + m._id + '/edit' ">
            <i class="fa fa-fw fa-pencil"></i>
          </b-button>

          <b-button size="sm" variant="outline-danger" v-b-modal="'modal_' + m._id">
            <i class="fa fa-fw fa-trash"></i>
          </b-button>

          <!-- Bootstrap Modal Component -->
          <b-modal :id="'modal_' + m._id"
            :title="'Destroy User Registration?'"
            @ok="onConfirmDestroy(m)"
            ok-variant='danger'
            ok-title='DESTROY'
            cancel-title='Cancel'
          >
            <p class="text-left">Are you sure you want to destroy this User Registration?</p>
          </b-modal>

        </td>
      </tr>
    </tbody>

  </table>
</template>

<!-- // // // //  -->

<script>
import { mapActions } from 'vuex'

export default {
  props: ['collection'],
  methods: mapActions({
    onConfirmDestroy: 'user_registration/deleteModel'
  })
}
</script>

