<template>
  <div class="certificates page-content">
    <div class="section-title">{{ $t('certificates') }}</div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in certificateImg" :key="item">
        <img
          class="instruction-img"
          :src="`/certificates/certificate${item}.png`"
          alt=""
        />
      </swiper-slide>
      <div slot="button-next" class="swiper-button-next nav-btn"></div>
      <div slot="button-prev" class="swiper-button-prev nav-btn"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Certificates',
  data() {
    return {
      certificateImg: ['1', '2', '3'],
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        initialSlide: 0,
      },
    }
  },
}
</script>

<style lang="scss">
.page-content {
  margin: 4rem 0;
}
.certificates {
  .swiper {
    margin: 2rem 0;
  }
}
</style>
