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
  name: 'SwiperRemove',
  data() {
    return {
      fixImg: ['5', '6', '7', '8'],
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

<style scoped></style>
