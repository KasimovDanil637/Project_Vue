import {defineStore} from "pinia/dist/pinia";

export const BasketStore = defineStore("post-store",{
    // храним переменные
    state: () => ({
        basket: 0,
    }),
    //для функций
    actions: {
        plusCountBasket(){
            this.basket++
        },
        minusCountBasket(){
            if (this.basket > 0) {
                this.basket--
            }
        },

    },
    // возвращают вычисляемые данные
    getters: {
        getCountBasket:(state) => state.basket
    }
})