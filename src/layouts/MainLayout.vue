<template>
  <div>
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
  </div>
</template>

<script>
import Sidebar from '../components/app/Sidebar'
import Navbar from '../components/app/Navbar'
export default {
  components: {
    Sidebar, Navbar
  }
}
</script>
<style>
#app>div {
  width: 100%;
  height: 100%;
}
</style>