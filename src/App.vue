<template>
  <div id="app">
    <McvTopbar />
    <router-view></router-view>
  </div>
</template>

<script>
import McvTopbar from '@/components/Topbar.vue'

export default {
  name: 'App',
  components: {
    McvTopbar
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/global.scss";
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
