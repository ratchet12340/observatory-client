
<template>
  <div class="container">
    <h2>User Settings</h2>
    <pre class="bg-dark text-light">{{ currentUser }}</pre>
    <LayoutView :currentUser="currentUser"/>
    <ProfileEditor :currentUser="currentUser"/>
    <ChangePassword :currentUser="currentUser"/>
    <DeleteAccount :currentUser="currentUser"/>
  </div>
</template>

<!-- // // // //  -->

<script>
import ProfileEditor from '../components/ProfileEditor'
import ChangePassword from '../components/ChangePassword'
import DeleteAccount from '../components/DeleteAccount'
import { mapGetters } from 'vuex'

export default {
  components: {
    ProfileEditor,
    ChangePassword,
    DeleteAccount
  },
  metaInfo: {
    title: 'User - Settings'
  },
  computed: mapGetters({
    currentUser: 'auth/current_user'
  })
}
</script>


