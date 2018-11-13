<template>
  <table class="table table-hover table-striped">
    <thead>
      <th>Student</th>
      <th>Date</th>
      <th>Verify</th>
    </thead>
    <tbody>
      <VerifyChild v-for="model in collection" :model="model" :key="model._id" />
      <tr class='table-info' v-if="!collection[0]">
        <td>No unverified users</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import VerifyChild from './VerifyChild'

export default {
  props: ['collection'],
  components: {
    VerifyChild
  }
}
</script>
