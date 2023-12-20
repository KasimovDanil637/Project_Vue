<template>
  <div class="container">
    <h1 class="container_name">Mac</h1>
    <div class="count-merch">{{filterData.length}} Товара(-ов)</div>
    <button class="button-filter" @click="toggleFilters">Фильтры</button>
    <div v-if="showFilters" class="filter">
      <div class="filter-color-text">Цвет</div>
      <select class="filter-color-select" v-model="filter_color">
        <option v-for="(item,index) in merch" :key="index" :value="item.color" >{{item.color}}</option>
      </select>
      <div class="filter-model-text">Модель</div>
      <select class="filter-model-select" v-model="filter_name">
        <option v-for="(item,index) in new Set(this.merch.map(i => i.name))" :value="item" :key="index">{{item}}</option>
      </select>
      <div class="filter-price-text">Цена</div>
      <input class="before-input" placeholder="От" type="text" v-model="filter_price_before">
      <input class="after-input" placeholder="До" type="text" v-model="filter_price_after">
      <button class="button-reset" @click="reset">Сбросить</button>
    </div>
    <div class="container_line"></div>
    <div class="container_merch">
      <ItemForPage v-for="item in filterData" :key="item.id" :item="item"/>
    </div>
  </div>
</template>

<script>
import {DATA_BASE_MAC} from "@/assets/js/data_base";
import ItemForPage from "@/components/item-for-page/ItemComponent.vue";

export default {
  name: "MacPage",
  components: {ItemForPage},
  data(){
    return{
      merch: DATA_BASE_MAC,
      filter_color: "Все",
      filter_name: "Все",
      filter_price_before: '',
      filter_price_after: '',
      showFilters: false,
      filter_reset: false,
    }
  },
  computed: {
    filterData() {
      let filteredData = this.merch;
      if (this.filter_color !== "Все"){
        filteredData = filteredData.filter(item => item.color === this.filter_color);
      }
      if (this.filter_name !== "Все"){
        filteredData = filteredData.filter(item => item.name === this.filter_name);
      }
      if (this.filter_price_before > 0){
        const priceFilter = parseInt(this.filter_price_before);
        filteredData = filteredData.filter(item => Number(item.price.split(' ')[0] + item.price.split(' ')[1]) > priceFilter);
      }
      if (this.filter_price_after > 0){
        const priceFilter = parseInt(this.filter_price_after);
        filteredData = filteredData.filter(item => Number(item.price.split(' ')[0] + item.price.split(' ')[1]) < priceFilter);
      }
      return filteredData;
    }
  },
  methods: {
    toggleFilters() {
      this.showFilters = !this.showFilters;
    },
    reset(){
      this.filter_color = "Все";
      this.filter_name = "Все";
      this.filter_price_before = '';
      this.filter_price_after = '';
    }
  }
};
</script>

<style scoped lang="scss" src="/src/assets/styles/product-page/product_page.scss"></style>