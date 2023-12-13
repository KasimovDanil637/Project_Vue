<template>
  <div class="main-container">
    <LoginPage/>
  </div>
</template>

<script>


import LoginPage from "@/pages/login-page/LoginPage.vue";

export default {
  name: 'App',
  components: {
    LoginPage,
  }
}
</script>

<style lang="scss" src="/src/assets/styles/global.scss"></style>
<style lang="scss" src="/src/assets/styles/main.scss"></style>

