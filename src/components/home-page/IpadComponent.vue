<template>
  <div class="container">
    <div class="content_container">
      <div class="content_item-poster"></div>
      <div class="content_item-text">
        <div class="item_text">iPad</div>
        <router-link class="item_link" to="/iphone">Посмотреть</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IpadComponent",
};
</script>

<style scoped lang="scss" src="/src/assets/styles/home-page/home-ipad.scss"></style>