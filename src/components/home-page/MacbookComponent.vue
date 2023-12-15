<template>
  <div class="container">
    <div class="content_container">
      <div class="content_item-poster"></div>
      <div class="content_item-text">
        <div class="item_text">Macbook</div>
        <router-link class="item_link" to="/iphone">Посмотреть</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MacbookComponent",
};
</script>

<style scoped lang="scss" src="/src/assets/styles/home-page/home-macbook.scss"></style>