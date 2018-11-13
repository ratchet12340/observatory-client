<template>

  <div class='container-fluid'>
    <div class="jumbotron jumbotron-fluid hero">
      <div class="row text-center">
        <div class="col-lg-12">
          <img src="https://raw.githubusercontent.com/rcos/rcos-branding/master/img/lockup-red.png" width="400px">
        </div>
      </div>
    </div>

    <Explore/>

  </div>
</template>

<script>
import MissionStatement from './components/missionStatement.vue'
import Explore from './components/explore.vue'

export default {
  name: 'main_home',
  metaInfo: {
    title: 'Main - Home'
  },
  components: {
    MissionStatement,
    Explore
  }
}
</script>

<style>
.hero {
  /*background:#da291c;*/
  /*color: #ffffff;*/
}
</style>
