<template>
  <div id="instructions" class="instructions">
    <div class="instruction-section">
      <div class="section-title">{{ $t('instructionFix') }}</div>
      <swiper-fix />
    </div>
  </div>
</template>

<script>
import SwiperFix from './swiperFix'
export default {
  name: 'Instructions',
  components: { SwiperFix },
  data() {
    return {
      removeImg: ['5', '6', '7', '8'],
    }
  },
}
</script>

<style lang="scss">
.instruction-section {
  margin-bottom: 5rem;
  .section-title {
    margin: 2rem;
  }
}
</style>
