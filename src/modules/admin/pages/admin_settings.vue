<template>
  <div class="container">
    <Semester/>
    <hr>
    <div class="row">
      <Buttons/>
    </div>
  </div>
</template>

<script>
import Buttons from '../components/buttons'
import Semester from '../components/semester'

export default {
  components: {
    Buttons,
    Semester
  },
  metaInfo: {
    title: 'Blog - New'
  }
}
</script>


