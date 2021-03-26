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
.banner {
  display: flex;
  padding: 40px 0;
  .banner-text {
    width: 50%;
    .banner-text_wrapper {
      margin: 80px auto;
      width: 80%;
      .banner-text_title {
        font-size: 4rem;
        color: $acc-blue-color;
      }
      h4 {
        font-size: 2rem;
        color: $acc-blue-color;
        margin-bottom: 10px;
      }
      .banner-text_info {
        font-size: 0.9rem;
        width: 60%;
      }
    }
  }
  .banner-img {
    width: 50%;
    text-align: center;
    img {
      width: 80%;
    }
  }
}
</style>
