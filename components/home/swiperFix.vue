<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in fixImg" :key="item">
        <img class="instruction-img" src="/instructions/0.jpg" alt="" />
      </swiper-slide>
      <div slot="button-next" class="swiper-button-next nav-btn"></div>
      <div slot="button-prev" class="swiper-button-prev nav-btn"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'SwiperFix',
  data() {
    return {
      fixImg: ['1', '2', '3', '4'],
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
.nav-btn {
  padding: 20px;
  color: $acc-blue-color !important;
}
.swiper {
  .swiper-wrapper {
    width: 50%;
    margin: 0 auto;
    @media (max-width: $sm) {
      width: 90%;
    }
  }
  .instruction-img {
    width: 50%;
    @media (max-width: $sm) {
      width: 90%;
    }
  }
}
</style>
