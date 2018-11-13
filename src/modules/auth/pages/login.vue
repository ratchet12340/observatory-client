<template>
  <div class="app d-flex flex-row align-items-center">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-4">
          <div class="card card-body">
            <h4 class="card-title">Sign In</h4>
            <fieldset>

                <div class="form-group">
                  <input class="form-control" placeholder="E-mail" v-model="login_user.email" type="text">
                </div>

                <div class="form-group">
                  <input class="form-control" placeholder="Password" v-model="login_user.password" type="password" value="">
                </div>

                <FormSubmit :click="login"/>

            </fieldset>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormInput from '@/components/FormInput'
import FormSubmit from '@/components/FormSubmit'
import { mapGetters, mapActions } from 'vuex'
export default {
  metaInfo: {
    title: 'Auth - Login'
  },
  components: {
    FormInput,
    FormSubmit
  },
  computed: mapGetters({
    login_user: 'auth/login_user',
    logging_in: 'auth/logging_in'
  }),
  methods: mapActions({
    login: 'auth/login'
  })
}
</script>
