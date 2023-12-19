<template>
  <div class="container">
    <div class="container_text">Корзина</div>
    <div class="line"></div>
    <div v-if="data.length === 0" class="no-items">В корзине ничего нет</div>
    <div class="container_items">
      <BasketItem v-for="(item,index) in data" :key="index" :item="item" @delete="deleteItem"/>
    </div>
    <div class="container_buy">
      <div class="container_buy_header">Оформление заказа</div>
      <div class="line-buy"></div>
      <div class="buy-count">Всего товаров: <strong>{{data.length}}</strong></div>
      <div class="buy-summa-text">Итого:</div>
      <div class="buy-summa">{{summa}}₽</div>
      <button class="buy-btn" @click="send">Оформить</button>
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
import BasketItem from "@/components/basket-page/BasketItemComponent.vue";

export default {
  name: "BasketPage",
  components: {BasketItem},
  created() {
    DATA_BASE_IPHONE.forEach((item) => {
      this.findDB(item)
    })
    DATA_BASE_IPAD.forEach((item) => {
      this.findDB(item)
    })
    DATA_BASE_MAC.forEach((item) => {
      this.findDB(item)
    })
    DATA_BASE_WATCH.forEach((item) => {
      this.findDB(item)
    })
    DATA_BASE_AIRPODS.forEach((item) => {
      this.findDB(item)
    })
    this.getSum()
  },
  data(){
    return{
      data: [],
      summa: 0,
    }
  },
  methods:{
    getSum(){
      this.data.forEach((item) => {
        let arrayPrice = item.price.split(" ")
        let price = arrayPrice[0] + arrayPrice[1]
        this.summa += Number(price)
      })
    },
    send(){
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(this.summa)
      })
          .then(() => console.log(200))
    },
    deleteItem(item) {
      const index = this.data.indexOf(item);
      if (index !== -1) {
        this.data.splice(index, 1);
        this.summa = 0;
        localStorage.removeItem(`add_basket_${item.name}_${item.id}`)
        localStorage.removeItem(`${item.name}_${item.id}`)
        this.getSum();
      }
    },
    findDB(item){
      if (localStorage.getItem(`${item.name}_${item.id}`) !== null) {
        this.data.push(JSON.parse(localStorage.getItem(`${item.name}_${item.id}`)))
      }
    }

  }


};
</script>

<style scoped lang="scss" src="/src/assets/styles/basket-page/basket-page.scss"></style>