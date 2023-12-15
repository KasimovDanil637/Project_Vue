<template>
    <div class="container">
      <h1 class="container_name">iPhone</h1>
      <div class="container_line"></div>
      <div class="container_merch">
        <ItemForPage v-for="item in merch" :key="item.id" :item="item"/>
      </div>
    </div>
</template>

<script>
import {DATA_BASE_IPHONE} from "@/assets/js/data_base";
import ItemForPage from "@/components/item-for-page/ItemComponent.vue";

export default {
  name: "IphonePage",
  components: {ItemForPage},
  data(){
    return{
      merch: DATA_BASE_IPHONE
    }
  }
};
</script>

<style scoped lang="scss" src="/src/assets/styles/merch-page/merch_page.scss"></style>