<template>
  <div class="container">
    <h1 class="container_header">Support</h1>
    <div class="container_form">
      <form action="">
        <input class="title" type="text" placeholder="Title" v-model="formInfo.title" />
        <input class="title" type="email" placeholder="Email" v-model="formInfo.email" />
        <textarea class="message" placeholder="Message" v-model="formInfo.message" />
        <button class="button">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SupportPage",
  data(){
    return {
      formInfo: {
        title: '',
        message: '',
        email: '',
      }
    }
  }
};
</script>

<style scoped lang="scss" src="/src/assets/styles/lyaout/support.scss"></style>