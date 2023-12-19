<template>
  <div class="container">
    <div class="content_container-iphone">
      <div class="content_item-text-iphone">
        <div class="item_text-iphone">iPhone</div>
        <router-link class="item_link-iphone" to="/iphone">Посмотреть</router-link>
      </div>
      <div class="content_item-poster-iphone"></div>
    </div>
    <div class="content_container-mac">
      <div class="content_item-poster-mac"></div>
      <div class="content_item-text-mac">
        <div class="item_text-mac">Macbook</div>
        <router-link class="item_link-mac" to="/mac">Посмотреть</router-link>
      </div>
    </div>
    <div class="content_container-watch">
      <div class="content_item-text-watch">
        <div class="item_text-watch">Watch</div>
        <router-link class="item_link-watch" to="/watch">Посмотреть</router-link>
      </div>
      <div class="content_item-poster-watch"></div>
    </div>
    <div class="container_line">
      <div class="container-ipad">
        <div class="content_container-ipad">
          <div class="content_item-poster-ipad"></div>
          <div class="content_item-text-ipad">
            <div class="item_text-ipad">iPad</div>
            <router-link class="item_link-ipad" to="/ipad">Посмотреть</router-link>
          </div>
        </div>
      </div>
      <div class="container-airpods">
        <div class="content_container-airpods ">
          <div class="content_item-poster-airpods "></div>
          <div class="content_item-text-airpods ">
            <div class="item_text-airpods ">Air Pods</div>
            <router-link class="item_link-airpods " to="/airpods">Посмотреть</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomePage",
};
</script>

<style scoped lang="scss" src="/src/assets/styles/home-page/home.scss"></style>
<style scoped lang="scss" src="/src/assets/styles/home-page/home-iphone.scss"></style>
<style scoped lang="scss" src="/src/assets/styles/home-page/home-macbook.scss"></style>
<style scoped lang="scss" src="/src/assets/styles/home-page/home-watch.scss"></style>
<style scoped lang="scss" src="/src/assets/styles/home-page/home-ipad.scss"></style>
<style scoped lang="scss" src="/src/assets/styles/home-page/home-airpods.scss"></style>