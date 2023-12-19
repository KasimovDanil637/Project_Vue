<template>
  <div class="container-item" >
    <div class="color" :style="{ backgroundColor: item.hex }" @click="redirect"/>
  </div>
</template>

<script>
export default {
  name: "ColorItem",
  props: {
    item: {
      type: String,
      required: true
    },
  },
  methods:{
    redirect(){
      this.$router.push(`/merch/${this.item.category}/${this.item.id}`).then(() => {
        window.location.reload();
      });

    }
  }
}
</script>
<style scoped lang="scss" src="/src/assets/styles/check-page/check-color-item.scss"></style>