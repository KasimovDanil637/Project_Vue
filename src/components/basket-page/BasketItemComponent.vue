<template>
  <div class="container">
    <div class="container_img"  @click="redirect">
      <img class="img" :src="item.img" alt="">
    </div>
    <div class="container_content">
        <h1 class="content_name" @click="redirect">{{item.name}}</h1>
        <div class="content_color">Цвет: <strong>{{item.color}}</strong></div>
        <div v-if="item.memory !== ''" class="content_memory">Память: <strong>{{item.memory}} </strong></div>
    </div>
    <div>
      <div class="content_price"><strong> {{item.price }}₽</strong></div>
      <button class="content_delete" @click="deleteItem" >Удалить</button>
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
  methods: {
    deleteItem() {
      this.$emit('delete', this.item);
    },
    redirect(){
      this.$router.push(`/check_merch/${this.item.category}/${this.item.id}`).then(() => {
        window.location.reload();
      });
    },
  }

};
</script>

<style scoped lang="scss" src="/src/assets/styles/basket-page/basket-list.scss"></style>