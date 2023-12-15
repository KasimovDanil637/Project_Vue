<template>
  <div class="container">
    <IphoneComponent/>
    <MacbookComponent/>
    <WatchComponent/>
    <div class="container_line">
      <IpadComponent/>
      <AirpodsComponent/>
    </div>
  </div>
</template>

<script>
import IphoneComponent from "@/components/home-page/IphoneComponent.vue";
import MacbookComponent from "@/components/home-page/MacbookComponent.vue";
import WatchComponent from "@/components/home-page/WatchComponent.vue";
import IpadComponent from "@/components/home-page/IpadComponent.vue";
import AirpodsComponent from "@/components/home-page/AirPodsComponent.vue";
export default {
  name: "HomePage",
  components: {AirpodsComponent, IpadComponent, WatchComponent, MacbookComponent, IphoneComponent},
};
</script>

<style scoped lang="scss" src="/src/assets/styles/home-page/home.scss"></style>