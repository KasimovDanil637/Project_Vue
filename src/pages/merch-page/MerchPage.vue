<template>
  <div class="global_container">
    <div class="container">
      <div class="container_img">
        <img class="img" :src="merch.img" alt="{{merch.name}}">
      </div>
      <div class="container_content">
        <div :class="isActive ? 'content_new' : 'content_not_new'">Новинка</div>
        <h1 class="content_name">{{merch.name}} {{merch.memory}}, {{merch.color}}</h1>
        <div class="content_color">
          <div class="color-text" >Цвет</div>
          <ColorItem v-for="(item,index) in data_analog" :class=" merch.color === item.color ? 'active-color' : 'non-active-color'"  :key="index" :item="item"/>
        </div>
        <div class="content_price">{{merch.price}}₽</div>
        <button id="btn-add-basket" class="content_button" @click="addBasket">{{btn}}</button>
      </div>
    </div>
    <div class="line"></div>
    <div class="container_info">
      <img :src="merch.info_1" alt="{{merch.name}}">
      <img v-if="merch.info_2" :src="merch.info_2" alt="{{merch.name}}">
      <img v-if="merch.info_3" :src="merch.info_3" alt="{{merch.name}}">
    </div>
  </div>
</template>

<script>
import {
  DATA_BASE_AIRPODS,
  DATA_BASE_IPAD,
  DATA_BASE_IPHONE,
  DATA_BASE_MAC,
  DATA_BASE_WATCH
} from "@/assets/js/data_base";
import ColorItem from "@/components/merch-page/ColorItemComponent.vue";
import {BasketStore} from "@/stores/basket.store";

export default {
  name: "BuyPageComponent.vue",
  components: {ColorItem},
  created() {
    this.getDataBase(this.$route.params.category)
    if(localStorage.getItem(`add_basket_${this.merch.name}_${this.merch.id}`) !== null){
      this.btn = localStorage.getItem(`add_basket_${this.merch.name}_${this.merch.id}`)
    }
  },
  data(){
    return{
      data_base: '',
      merch: '',
      data_analog: [],
      isActive: false,
      merchIsTrue: false,
      btn: "Добавить в корзину",
      merchData:{
        name: '',
        id: '',
        price: '',
        img: '',
        color: '',
        category: '',
        memory: '',
      }
    }
  },
  setup: function () {
    const basketStore = BasketStore()
    return {
      basketStore
    }
  },
  methods:{
    getDataBase(category){
      switch (category){
        case "iphone": this.data_base = DATA_BASE_IPHONE; break
        case "ipad": this.data_base = DATA_BASE_IPAD; break
        case "mac": this.data_base = DATA_BASE_MAC; break
        case "watch": this.data_base = DATA_BASE_WATCH; break
        case "airpods": this.data_base = DATA_BASE_AIRPODS; break
      }
      this.getMerch(this.$route.params.id)
    },
    getMerch(id){
     this.data_base.forEach((item) => {
       if (item.id === Number(id)){
         this.merch = item
         this.merchIsTrue = true;
       }
     })
      if (!this.merchIsTrue){
        this.$router.push(`/${this.$route.params.category}`)
      }
      this.merchData = {
        name: this.merch.name,
        id: this.merch.id,
        price: this.merch.price,
        img: this.merch.img,
        color: this.merch.color,
        category: this.merch.category,
        memory: this.merch.memory,
      }
      this.getOnlyAnalog()
    },
    getOnlyAnalog(){
      this.data_base.forEach((item) => {
        if (item.name === this.merch.name){
          this.data_analog.push(item);
          if (item.name === "iPhone 15" || item.name === "iMac 24 M3" || item.name === "Watch Ultra 2, 49 мм" || item.name === "Watch Series 9, 45 мм"){
            this.isActive = true;
          }
        }
      })
    },
    addBasket(){
      localStorage.setItem(`${this.merch.name}_${this.merch.id}`, JSON.stringify(this.merchData))
      if (document.getElementById("btn-add-basket").textContent !== "В корзине"){
        this.basketStore.plusCountBasket()
      }
      document.getElementById("btn-add-basket").textContent = "В корзине"
      localStorage.setItem(`add_basket_${this.merch.name}_${this.merch.id}`, document.getElementById("btn-add-basket").textContent )
    }
  }


};
</script>

<style scoped lang="scss" src="/src/assets/styles/merch-page/merch-page.scss"></style>