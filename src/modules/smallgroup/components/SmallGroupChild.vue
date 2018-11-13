
<template>
  <div class="card card-body">

    <div class="row">
      <div class="col-lg-6">
        <a :href="'#/small_groups/' + model._id">
          {{ model.name }}
        </a>
      </div>

      <div class="col-lg-6 text-right">
        <span class="badge badge-dark">
          {{ model.students.length }} Students
        </span>

        <span class="badge badge-primary">
          {{ model.dayCodes.length }} Day Codes
        </span>

        <span class="badge badge-primary">
          {{ model.enabled.length }} Enabled
        </span>
      </div>

    </div>

  </div>
</template>
<!-- // // // //  -->

<script>
export default {
  props: ['model']
}
</script>




