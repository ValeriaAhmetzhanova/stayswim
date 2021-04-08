<template>
  <v-bottom-navigation class="footer">
    <v-spacer></v-spacer>
    <div>
      <div class="bold footer-title">{{ $t('stayswim') }}</div>
      <div class="footer-text">
        {{ $t('footerText1') }}
        <br />
        {{ $t('footerText2') }}
        <br />
        <br />
        {{ $t('footerText3') }}
      </div>
    </div>
    <v-spacer></v-spacer>
    <div class="text-right">
      <div class="footer-item">+62 813 3703 3645</div>
      <div class="footer-text">6695959@gmail.com</div>
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
    @media (max-width: $sm) {
      font-size: 16px;
      margin-right: 10px;
    }
  }
  .footer-item {
    font-size: 30px;
    @media (max-width: $sm) {
      font-size: 16px;
    }
  }
  .footer-text {
    color: $darkgrey-color;
    font-size: 14px;
    @media (max-width: $sm) {
      display: none;
    }
  }
}
</style>
