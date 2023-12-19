<template>
  <div class="container">
    <div class="container_items">
      <div class="container_item">©Apple Store 2023</div>
      <router-link to="/about_us" class="container_item link">About us</router-link>
      <router-link to="/support" class="container_item link">Support</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "layout-footer",
};
</script>

<style scoped lang="scss" src="/src/assets/styles/lyaout/footer-lyaout.scss"></style>