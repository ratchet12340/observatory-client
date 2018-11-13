<template>
  <div class="row">
    <div class="col-sm-12">
      <table class="table table-hover table-striped">
        <thead>
          <th>Name</th>
          <th>Name</th>
          <th>Projects</th>
        </thead>
        <tbody>
          <tr v-for="member in members" :key="member._id">
            <td>
              <img :src="member.avatar"/>
            </td>
            <td>{{ member.name }}</td>
            <td>{{ member.projects.length }}</td>
            <td>
              <button class="btn btn-sm btn-outline-danger" @click="removeMember({ smallGroupId: model._id, userId: member._id })">
                Remove
              </button>
            </td>
          </tr>
          <tr class='table-warning' v-if="!members[0]">
            <td>No members in this group</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: mapActions({
    removeMember: 'smallgroup/removeSmallGroupMember'
  }),
  computed: mapGetters({
    model: 'smallgroup/model',
    members: 'smallgroup/smallGroupMembers'
  })
}
</script>

