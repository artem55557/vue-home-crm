<template>
  <div id="app">
    <component :is="layout"> 
      <router-view/>
    </component> 
  </div>
</template>

<script>
import EmptyLayout from './layouts/EmptyLayout'
import MainLayout from './layouts/MainLayout'

export default {
  
  computed: {
    layout () {
      return (this.$route.meta.layout || 'Empty') + 'Layout'
    }
  },
  components: {
    EmptyLayout, MainLayout
  }
  
}
</script>

<style>
@import 'assets/css/styles.min.css';
#app {
  height: 100%;
}
</style>
