<template>
  <v-bottom-navigation class="footer">
    <v-spacer></v-spacer>
    <div>
      <div class="bold footer-title">STAY SWIM</div>
      <div class="footer-text">
        The best cover for swimming
        <br />
        with deep wounds or scars
        <br />
        <br />
        © 2021 All rights reserved
      </div>
    </div>
    <v-spacer></v-spacer>
    <div class="text-right">
      <div class="footer-item">8 (800) 500-51-86</div>
      <div class="footer-text">stayswim@mail.ru</div>
    </div>
    <v-spacer></v-spacer>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss">
.bold {
  font-weight: 600;
}
.text-right {
  text-align: right;
}
.footer {
  background-color: transparent !important;
  color: $grey-color !important;
  height: auto !important;
  padding: 10px 50px;
  .footer-title {
    font-size: 36px;
  }
  .footer-item {
    font-size: 30px;
  }
  .footer-text {
    color: $darkgrey-color;
    font-size: 14px;
  }
}
</style>
