<template>
  <div>
    <loader v-if="loading"></loader>
    <template  v-else>
      <header class="main-header">
        <div class="header-logo">
          <a href>
            <SvgIcon :name="'logo'"/>
          </a>
        </div>
        <Navbar />
      </header>
      <div class="container">
        <Sidebar />
        <router-view/>
      </div>
    </template>
    
  </div>
</template>

<script>
import Sidebar from '../components/app/Sidebar'
import Navbar from '../components/app/Navbar'

export default {
  data: () => ({
    loading: true
  }),
  components: {
    Sidebar, Navbar
  },
 
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')
      this.$message.success('Добро пожаловать!')
    }
    if (!Object.keys(this.$store.getters.allRecords).length) {
      await this.$store.dispatch('fetchRecord')
    }
    this.loading = false
  },

}
</script>
<style>
#app>div {
  width: 100%;
  height: 100%;
}
</style>