<template>
  <div class="types">
    <div class="section-title">{{ $t('typesOfFilms') }}</div>
    <div class="types-body">
      <!--      <div class="types-col">-->
      <!--        <div class="img-wrap"><img src="product1.png" alt="product" /></div>-->
      <!--        <div class="title">{{ $t('typesTitle1') }}</div>-->
      <!--        <div>{{ $t('typesText1') }}</div>-->
      <!--        <div>{{ $t('typesText2') }}</div>-->
      <!--        <div>{{ $t('typesText3') }}</div>-->
      <!--        <div><nuxt-link to="/buyNow" class="buy-btn">Buy</nuxt-link></div>-->
      <!--      </div>-->
      <div class="types-col">
        <div class="img-wrap"><img src="product2.png" alt="product" /></div>
        <div class="title">{{ $t('typesTitle2') }}</div>
        <div>{{ $t('typesText4') }}</div>
        <div>{{ $t('typesText3') }}</div>
        <div><nuxt-link to="/buyNow" class="buy-btn">Buy</nuxt-link></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Types',
}
</script>

<style lang="scss">
.types {
  margin-bottom: 2rem;
  .types-body {
    display: flex;
    margin-top: 3rem;
    @media (max-width: $sm) {
      flex-direction: column;
    }
    .types-col {
      width: 100%;
      text-align: center;
      @media (max-width: $sm) {
        width: 100%;
      }
      .img-wrap {
        display: flex;
        justify-content: center;
        height: 200px;
        img {
          padding: 1rem;
          max-height: 100%;
          height: fit-content;
        }
      }
      .title {
        color: $acc-blue-color;
        font-size: 1.2rem;
        width: 50%;
      }
      div {
        margin: 0.5rem auto;
        width: 50%;
        &:last-child {
          margin: 2rem auto;
        }
      }
    }
  }
}
</style>
