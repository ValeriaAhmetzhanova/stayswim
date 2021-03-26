<template>
  <v-app-bar class="header" color="transparent" flat>
    <div class="logo_wrapper nav-item">
      <img class="logo_img" src="logo.svg" alt="logo" />
    </div>
    <v-spacer></v-spacer>
    <nuxt-link to="/" class="nav-item">{{ $t('stayswim') }}</nuxt-link>
    <nuxt-link to="/404" class="nav-item">{{
      $t('questionsAndAnswers')
    }}</nuxt-link>
    <nuxt-link to="/404" class="nav-item">{{ $t('certificates') }}</nuxt-link>
    <nuxt-link to="/404" class="nav-item">{{ $t('advantages') }}</nuxt-link>
    <nuxt-link to="/404" class="nav-item">{{ $t('instruction') }}</nuxt-link>
    <nuxt-link to="/404" class="nav-item">{{ $t('reviews') }}</nuxt-link>
    <nuxt-link to="/404" class="nav-item">{{ $t('whereToBuy') }}</nuxt-link>
    <nuxt-link to="/404" class="nav-item">{{ $t('buyNow') }}</nuxt-link>
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
  padding: 20px 30px;
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
    color: white;
    text-decoration: none;
    &:hover {
      color: $acc-blue-color;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  .nuxt-link-active {
    color: $acc-blue-color;
  }
}
</style>
