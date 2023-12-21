<template>
  <div class="container">
    <h1 class="container_name">iPhone</h1>
    <div class="count-merch">{{filteredMerch.length}} Товара(-ов)</div>
    <button class="button-filter" @click="toggleFilters">Фильтры</button>
    <div v-if="showFilters" class="filter">
      <FilterComponent :merch="merch" @filteredData="receiveFilteredData"/>
    </div>
    <div class="container_line"></div>
    <div class="container_merch">
      <ItemForPage v-for="item in filteredMerch" :key="item.id" :item="item"/>
    </div>
  </div>
</template>

<script>
import {DATA_BASE_IPHONE} from "@/assets/js/data_base";
import ItemForPage from "@/components/item-for-page/ItemComponent.vue";
import FilterComponent from "@/components/item-for-page/FilterComponent.vue";

export default {
  name: "IphonePage",
  components: {FilterComponent, ItemForPage},
  data(){
    return{
      merch: DATA_BASE_IPHONE,
      showFilters: false,
      filteredMerch: DATA_BASE_IPHONE,
    }
  },
  methods: {
    toggleFilters() {
      this.showFilters = !this.showFilters;
    },
    receiveFilteredData(filteredData) {
      this.filteredMerch = filteredData;
    }
  }
};
</script>

<style scoped lang="scss" src="/src/assets/styles/product-page/product_page.scss"></style>