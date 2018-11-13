<template>
  <table class="table table-hover">

    <!-- Table Header -->
    <thead>
      <th>
        Subject
        <i class="fa fa-fw fa-question-circle-o" v-b-tooltip.hover.bottom title="The text that appears in the subject line of the Notification" ></i>
      </th>
      <th>
        Body
        <i class="fa fa-fw fa-question-circle-o" v-b-tooltip.hover.bottom title="The body of the notification" ></i>
      </th>
      <th>Dismissed</th>
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
      </tr>

      <tr v-for="m in collection" :key="m._id">
        <td>{{m.subject}}</td>
        <td>{{m.body}}</td>
        <td>
          <span>
            <i class="fa fa-fw fa-check-square-o" v-if="m.dismissed"></i>
            <i class="fa fa-fw fa-square-o" v-if="!m.dismissed"></i>
          </span>
        </td>

        <td class='text-right'>
          <b-button size="sm" variant="outline-primary" :to=" '/notifications/' + m._id">
            <i class="fa fa-fw fa-eye"></i>
          </b-button>

          <b-button
            size="sm"
            variant="outline-warning"
            @click="onConfirmDismiss(m)"
          >
            <i class="fa fa-fw fa-times"></i>
          </b-button>
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
    onConfirmDismiss: 'notification/dismissModel'
  })
}
</script>

