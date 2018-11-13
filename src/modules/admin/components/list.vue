<template>
  <div class="row">
    <div class="col-lg-12">
      <table class="table table-hover text-center table-striped table-bordered">
        <thead>
          <tr>
              <td colspan="3">User Info</td>
              <td colspan="2">Full Group</td>
              <td colspan="2">Small Group</td>
              <td colspan="2">Contributions</td>
              <td colspan="2">Edit</td>
          </tr>
          <tr>
              <td>Name</td>
              <td>GitHub</td>
              <td>User Role</td>
              <td title="Full Group Attendance">
                <i class="fa fa-calendar-check-o"></i>
              </td>
              <td title="Bonus Full Group Attendance">
                <i class="fa fa-plus"></i>
              </td>
              <td title="Small Group Attendance">
                <i class="fa fa-calendar-check-o"></i>
              </td>
              <td title="Bonus Small Group Attendance">
                <i class="fa fa-plus"></i>
              </td>
              <td>Events</td>
              <td>Commits</td>
              <td>Active</td>
              <td>Attendance</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in collection">

            <td scope="row">
              <a :href="'#/users/' + user._id" target="_blank">
                {{ user.name }}
              </a>
            </td>

            <td>
              <a :href="'https://github.com/' + user.github.login " target="_blank">
                {{ user.github.login }}
              </a>
            </td>

            <td>
              <select class="form-control" v-model="user.role" @change="setRole(user)">
                <option value="user">User</option>
                <option value="mentor">Mentor</option>
                <option value="admin">Admin</option>
              </select>
            </td>

            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>

            <td>
              <button class="btn btn-outline-warning" v-if="!user.active" v-b-tooltip.hover.left title="Click to Activate" @click="activate(user)">
                <i class="fa fa-lg fa-square-o"></i>
              </button>

              <button class="btn btn-outline-success" v-else v-b-tooltip.hover.left title="Click to Dectivate" @click="deactivate(user)">
                <i class="fa fa-lg fa-check"></i>
              </button>
            </td>

            <td>
              <button class="btn btn-outline-primary">
                <i class="fa fa-lg fa-calendar"></i>
              </button>
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    fetching: 'user/fetching',
    collection: 'user/collection'
  }),
  methods: mapActions({
    setRole: 'user/setUserRole',
    activate: 'user/activateUser',
    deactivate: 'user/deactivateUser'
  })
}
</script>
<style type="text/css">
  thead: {
    font-weight: 600
  }
</style>
