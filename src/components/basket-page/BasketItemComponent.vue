<template>
  <div class="container">
    <div class="container_img">
      <img class="img" :src="item.img" alt="">
    </div>
    <div class="container_content">
        <h1 class="content_name">{{item.name}}</h1>
        <div class="content_color">Цвет: <strong>{{item.color}}</strong></div>
        <div v-if="item.memory !== ''" class="content_memory">Память: <strong>{{item.memory}} </strong></div>
    </div>
    <div>
      <div class="content_price"><strong> {{item.price}}₽</strong></div>
<!--      <button class="content_delete" @click="remove">Удалить</button>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "BasketItem",
  props: {
    item: {
      type: Object,
      required: false
    }
  },
  methods:{
    remove(){
      // localStorage.setItem(`${this.item.name}_${this.item.id}`, '')
      // localStorage.setItem(`add_basket_${this.merch.name}_${this.merch.id}`, '')
    }
  }
};
</script>

<style scoped lang="scss" src="/src/assets/styles/basket-page/basket-list.scss"></style>