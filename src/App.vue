
<template>
  <div id="app">
    <AppNavbar/>
    <router-view/>
    <!-- <AppFooter/> -->
  </div>
</template>

<script>
import AppNavbar from '@/components/Navbar'
import AppFooter from '@/components/Footer'

export default {
  name: 'app',
  components: {
    AppNavbar,
    AppFooter
  },
  metaInfo: {
    title: 'Loading...',
    titleTemplate: 'RCOS - %s',
    htmlAttrs: {
      lang: 'en'
    }
  }
}
</script>

<style type="text/css">
  html {
    height: 100%;
  }

  body {
    height: 100%;
    background-color: #f3f3f3;
  }

  .container-fluid, .container {
    padding-top: 4.5rem;
  }

  #app {
    height: 100%;
  }

  .app {
    height: 100%;
  }
</style>
