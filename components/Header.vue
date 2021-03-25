<template>
  <v-app-bar class="header" color="transparent" flat>
    <div class="logo_wrapper">
      <img class="logo_img" src="logo.svg" alt="logo" />
    </div>
    <v-spacer></v-spacer>
    <div class="nav-item">STAY SWIM</div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
.header {
  max-height: 100px;
  padding: 20px;
  .logo_wrapper {
    border: 1px solid $acc-blue-color;
    border-radius: 50%;
    height: 75px;
    .logo_img {
      padding: 15px;
      height: 75px;
    }
  }
}
</style>
