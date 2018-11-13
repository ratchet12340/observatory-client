<template>
  <div class="row">

    <div class="col-lg-4">
      <FormInput v-model="model.name" name="name" label="Name" type='text' placeholder='Project Name' help="Name of the project" />
    </div>

    <div class="col-lg-4">
      <FormInput v-model="model.description" name="description" label="Description" type='text' placeholder='Project Description' help="Description of the project" />
    </div>

    <div class="col-lg-4">
      <FormInput v-model="model.active" name="active" label="Is this Project active?" type='checkbox' />
    </div>

    <div class="col-lg-6">
      <FormInput v-model="model.githubUsername" name="githubUsername" label="Github Username" type='text' placeholder='Github Username' />
    </div>

    <div class="col-lg-6">
      <FormInput v-model="model.githubProjectName" name="githubProjectName" label="Github Project Name" type='text' placeholder='Project Name' />
    </div>

    <div class="col-lg-6">
      <FormSubmit class='w-100' :click="onSubmit"/>
    </div>

    </div>
  </div>
</template>

<!-- // // // // -->

<script>
import FormInput from '@/components/FormInput'
import FormSubmit from '@/components/FormSubmit'

export default {
  name: 'ProjectForm',
  props: ['model', 'onSubmit'],
  components: {
    FormInput,
    FormSubmit
  }
}
</script>
