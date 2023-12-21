<template>
  <div>
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
    <button class="button-apply" @click="sendFilteredData">Применить</button>
  </div>
</template>

<script>

export default {
  name: "FilterComponent",
  data(){
    return{
      filter_color: "Все",
      filter_name: "Все",
      filter_price_before: '',
      filter_price_after: '',
      filter_reset: false,
    }
  },
  props:{
    merch:{
      type: Array,
      required: false
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
      return filteredData
    }
  },
  methods:{
    reset(){
      this.filter_color = "Все";
      this.filter_name = "Все";
      this.filter_price_before = '';
      this.filter_price_after = '';
      this.sendFilteredData()
    },
    sendFilteredData() {
      this.$emit("filteredData", this.filterData);
    }
  },

};
</script>

<style scoped lang="scss" src="/src/assets/styles/product-page/product_page.scss"></style>