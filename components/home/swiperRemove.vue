<template>
  <div class="instruction-swiper">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in fixImg" :key="item">
        <img
          class="instruction-img"
          :src="`/instructions/${item}.jpg`"
          alt=""
        />
        <div class="instruction-text">{{ $t(`instructionText${item}`) }}</div>
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
      fixImg: ['7', '8'],
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
