<template>
  <div class="main-container">
    <layout-header/>
    <router-view style="min-height: 89vh"></router-view>
    <layout-footer/>
  </div>
</template>

<script>


import LayoutHeader from "@/layout/layout-header/LayoutHeader.vue";
import LayoutFooter from "@/layout/layout-footer/LayoutFooter.vue";

export default {
  name: 'App',
  components: {
    LayoutFooter,
    LayoutHeader,
  }
}
</script>

<style lang="scss" src="/src/assets/styles/global.scss"></style>
<style lang="scss" src="/src/assets/styles/main.scss"></style>

