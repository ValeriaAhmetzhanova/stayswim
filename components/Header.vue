<template>
  <v-app-bar class="header" color="transparent" flat>
    <div class="logo_wrapper nav-item">
      <img class="logo_img" src="logo.svg" alt="logo" />
    </div>
    <v-spacer></v-spacer>
    <div class="nav-item">{{ $t('stayswim') }}</div>
    <div class="nav-item">{{ $t('questionsAndAnswers') }}</div>
    <div class="nav-item">{{ $t('certificates') }}</div>
    <div class="nav-item">{{ $t('advantages') }}</div>
    <div class="nav-item">{{ $t('instruction') }}</div>
    <div class="nav-item">{{ $t('reviews') }}</div>
    <div class="nav-item">{{ $t('whereToBuy') }}</div>
    <div class="nav-item">{{ $t('buyNow') }}</div>
    <v-spacer></v-spacer>
    <div class="acc-blue">8 (800) 500-51-86</div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss">
.acc-blue {
  color: $acc-blue-color;
}
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
  .nav-item {
    margin-right: 2rem;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
