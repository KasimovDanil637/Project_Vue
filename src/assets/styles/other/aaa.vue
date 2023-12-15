<!--<template>-->
<!--  <div class="container">-->
<!--    <div class="container_items">-->
<!--      <router-link class="container_item" to="/profile/:username">Profile</router-link>-->
<!--      <router-link class="container_item" to="/posts">Posts</router-link>-->
<!--      <router-link class="container_item" to="/login">Log out</router-link>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'LayoutHeader'-->
<!--}-->
<!--</script>-->

<!--<style scoped lang="scss" src="/src/assets/styles/header-layout.scss"></style><template>-->
<!--  <div class="login-container">-->
<!--    <header>-->
<!--      <h1 class="header-text">Sign in</h1>-->
<!--    </header>-->
<!--    <main>-->
<!--      <div  class="main-label login-label">Username</div>-->
<!--      <input name="login" class="main-input" type="text" id="login">-->
<!--      <div class="main-label">Password</div>-->
<!--      <input name="password" class="main-input" type="password" id="password">-->
<!--      <button class="main-button" @click="checkUser()">Sign in</button>-->
<!--    </main>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import {DATA_BASE} from "@/assets/js/data_base";-->
<!--export default {-->
<!--  name: "LoginPage",-->
<!--  data(){-->
<!--    return {-->
<!--      data_base: DATA_BASE-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    checkUser(){-->
<!--      const login = document.getElementById("login").value-->
<!--      const password = document.getElementById("password").value-->
<!--      this.data_base.forEach((item) => {-->
<!--        if (item.username === login && item.password === password) {-->
<!--          this.$router.push(`/profile/${login}`);-->
<!--        }-->
<!--      })-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style scoped lang="scss" src="/src/assets/styles/login.scss"></style><template>-->
<!--  <div>-->
<!--    <profile-component :username="username" />-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import LayoutHeader from "@/layout/layout-header/LayoutHeader.vue";-->
<!--import ProfileComponent from "@/components/ProfileComponent.vue";-->

<!--export default {-->
<!--  name: 'MainPage',-->
<!--  components: {-->
<!--    ProfileComponent,-->
<!--    LayoutHeader-->
<!--  },-->
<!--  data() {-->
<!--    return{-->
<!--      username: ''-->
<!--    }-->
<!--  },-->
<!--  created() {-->
<!--    this.username = this.$route.params.username-->
<!--  }-->

<!--}-->
<!--</script><template>-->
<!--  <div class="main-container">-->
<!--    <layout-header/>-->
<!--    <router-view></router-view>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->


<!--import LoginPage from "@/pages/login-page/LoginPage.vue";-->
<!--import LayoutHeader from "@/layout/layout-header/LayoutHeader.vue";-->

<!--export default {-->
<!--  name: 'App',-->
<!--  components: {-->
<!--    LayoutHeader,-->
<!--    LoginPage,-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style lang="scss" src="/src/assets/styles/global.scss"></style>-->
<!--<style lang="scss" src="/src/assets/styles/main.scss"></style>-->