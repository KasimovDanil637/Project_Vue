import {defineStore} from "pinia/dist/pinia";

export const BasketStore = defineStore("post-store",{
    // храним переменные
    state: () => ({
        basket: localStorage.getItem("countBasket"),
    }),
    //для функций
    actions: {
        plusCountBasket(){
            this.basket++
            localStorage.setItem("countBasket", this.basket)
        },
        minusCountBasket(){
            if (this.basket > 0) {
                this.basket--
                localStorage.setItem("countBasket", this.basket)
            }
        },

    },
    // возвращают вычисляемые данные
    getters: {
        getCountBasket:(state) => state.basket
    }
})