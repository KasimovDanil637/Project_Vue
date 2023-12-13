<template>
  <div class="login-container">
    <header>
      <h1 class="header-text">Sign in</h1>
    </header>
    <main>
      <div  class="main-label login-label">Username</div>
      <input name="login" class="main-input" type="text" id="login">
      <div class="main-label">Password</div>
      <input name="password" class="main-input" type="password" id="password">
      <button class="main-button" @click="checkUser()">Sign in</button>
    </main>
  </div>
</template>

<script>
import {DATA_BASE} from "@/assets/js/data_base";
export default {
  name: "LoginPage",
  data(){
    return {
      data_base: DATA_BASE
    }
  },
  methods: {
    checkUser(){
      const login = document.getElementById("login").value
      const password = document.getElementById("password").value
      this.data_base.forEach((item) => {
        if (item.username === login && item.password === password){
          this.$router.push({ name: 'main' });
        }
      })
    }
  }
};
</script>

<style scoped lang="scss" src="/src/assets/styles/login.scss"></style>