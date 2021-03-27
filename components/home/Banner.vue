<template>
  <div class="banner">
    <div class="banner-text">
      <div class="banner-text_wrapper">
        <h1 class="banner-text_title">{{ $t('stayswim') }}</h1>
        <h4>{{ $t('bannerSubtitle') }}</h4>
        <div class="banner-text_info">
          {{ $t('bannerText1') }}
          <br />
          <br />
          {{ $t('bannerText2') }}
        </div>
        <nuxt-link to="/404" class="buy-btn">{{ $t('buy') }}</nuxt-link>
      </div>
    </div>
    <div class="banner-img">
      <img src="banner.png" alt="banner" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
}
</script>

<style lang="scss">
.buy-btn {
  padding: 0.5rem 2.5rem !important;
  border: 1px solid $acc-blue-color;
  color: $acc-blue-color !important;
  background-color: transparent !important;
  border-radius: 0;
  text-decoration: none;
}
.banner {
  display: flex;
  padding: 40px 0;
  .banner-text {
    width: 50%;
    @media (max-width: $sm) {
      width: 100%;
      text-align: center;
    }
    .banner-text_wrapper {
      margin: 80px auto;
      width: 80%;
      @media (max-width: $md) {
        margin: 30px auto;
      }
      .banner-text_title {
        font-size: 4rem;
        color: $acc-blue-color;
        @media (max-width: $md) {
          font-size: 3rem;
        }
      }
      h4 {
        font-size: 2rem;
        color: $acc-blue-color;
        margin-bottom: 10px;
        @media (max-width: $md) {
          font-size: 1.5rem;
        }
      }
      .banner-text_info {
        font-size: 0.9rem;
        width: 60%;
        margin-bottom: 20px;
        @media (max-width: $sm) {
          width: 100%;
        }
      }
    }
  }
  .banner-img {
    width: 50%;
    text-align: center;
    img {
      width: 80%;
    }
    @media (max-width: $sm) {
      display: none;
    }
  }
}
</style>
