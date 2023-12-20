<template>
      <div class="container-item" @click="redirect">
        <div class="container_img">
          <img class="img" :src="item.img" alt="iphone-image">
        </div>
        <h2 class="container_name">{{ item.name }} {{item.memory}}</h2>
        <div class="container_color">{{ item.color }}</div>
        <div class="container_price"> <strong>{{ item.price}}₽</strong></div>
      </div>
</template>

<script>
export default {
  name: "ItemForPage",
  props: {
    item: {
      type: Object,
      required: true
    },
  },
  methods:{
    redirect(){
      this.$router.push(`/merch/${this.item.category}/${this.item.id}`);
    }
  }
}
</script>
<style scoped lang="scss" src="/src/assets/styles/product-page/product-item.scss"></style>