<template>
  <div class="main-container">
    <layout-header/>
    <router-view></router-view>
  </div>
</template>

<script>


import LayoutHeader from "@/layout/layout-header/LayoutHeader.vue";

export default {
  name: 'App',
  components: {
    LayoutHeader,
  }
}
</script>

<style lang="scss" src="/src/assets/styles/global.scss"></style>
<style lang="scss" src="/src/assets/styles/main.scss"></style>

