<template>
  <div class="container">
    <div class="container_items">
      <router-link  class="container_item first-item" to="/home">
        <img class="container_item-img" src="/Users/danil/WebstormProjects/Project_2_42lab/src/assets/img/logo.png" alt="apple_icon">
      </router-link>
      <router-link class="container_item" to="/iphone">iPhone</router-link>
      <router-link class="container_item" to="/ipad">iPad</router-link>
      <router-link class="container_item" to="/mac">Mac</router-link>
      <router-link class="container_item" to="/watch">Watch</router-link>
      <router-link class="container_item " to="/airpods">AirPods</router-link>
      <router-link  class="container_item last-item" to="/basket">
        <div v-if="this.basketStore.basket > 0" class="countBasket">{{this.basketStore.basket}}</div>
        <img class="container_item-img" src="/Users/danil/WebstormProjects/Project_2_42lab/src/assets/img/basket.png" alt="apple_icon">
      </router-link>
    </div>
  </div>
</template>

<script>
import {BasketStore} from "@/stores/basket.store";

export default {
  name: 'LayoutHeader',
  setup: function () {
    const basketStore = BasketStore()
    return {
      basketStore
    }
  },

}
</script>

<style scoped lang="scss" src="/src/assets/styles/lyaout/header-layout.scss"></style>
