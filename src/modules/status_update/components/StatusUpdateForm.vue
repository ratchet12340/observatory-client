<template>
  <div class="row">
    <div class="col-lg-12">
      <b-tabs>
        <b-tab title="Title &amp; Meta" active>
          <div class="row mt-4">

            <div class="col-lg-6">
              <FormInput label="Title" v-model="model.title"/>
            </div>

            <div class="col-lg-6">
              <ProjectSelect />
            </div>

            <div class="col-lg-12">
              <div class="form-group">
               <label>Tags: </label>
               <input-tag placeholder="Blog Tags" :tags="model.tech" />
               <ul class="list-group"></ul>
              </div>
            </div>

          </div>
        </b-tab>

        <b-tab title="Blog Editor" >
          <div class="row mt-4">
            <div class="col-lg-12">
              <MarkdownInput v-model="model.body" />
            </div>
          </div>
        </b-tab>

        <b-tab title="Publish" >
          <div class="row mt-4 justify-content-center">
            <div class="col-lg-4">
              <FormSelect label="Status" v-model="model.status" :options="dropdownOptions" />

              <FormSubmit class='w-100' :click="onSubmit" label="Publish"/>
            </div>
          </div>
        </b-tab>

      </b-tabs>
    </div>


  </div>
</template>

<!-- // // // // -->

<script>
import InputTag from 'vue-input-tag'
import PageHeader from '@/components/PageHeader'
import FormInput from '@/components/FormInput'
import FormSubmit from '@/components/FormSubmit'
import ProjectSelect from '@/components/ProjectSelect'
import MarkdownInput from '@/components/MarkdownInput'
import { mapGetters } from 'vuex'
import FormSelect from '@/components/FormSelect'

export default {
  name: 'BlogForm',
  props: ['onSubmit'],
  components: {
    InputTag,
    PageHeader,
    FormSubmit,
    FormInput,
    ProjectSelect,
    MarkdownInput,
    FormSelect
  },
  computed: mapGetters({
    model: 'blog/newModel',
    dropdownOptions: 'blog/dropdownOptions'
  })
}
</script>
