<template>
  <div>
    <div class="page-content">
      <div class="section-title">{{ $t('ourContacts') }}</div>
      <div class="location">
        <Map class="location-item" />
        <div class="location-item text">
          <div class="number">8 (800) 500-51-86</div>
          <div class="address">
            Jl. Raya Uluwatu, Ungasan, Kec. Kuta Sel., Kabupaten Badung, Bali
            80361
          </div>
          <div class="email">stayswim@mail.ru</div>
        </div>
      </div>
    </div>
    <Questions />
  </div>
</template>

<script>
import Map from '../components/location/map'
export default {
  name: 'Location',
  components: { Map },
}
</script>

<style lang="scss">
.location {
  display: flex;
  margin: 3rem 0;
  @media (max-width: $sm) {
    flex-direction: column;
  }
  .location-item {
    width: 50%;
    margin: 0 auto;
    @media (max-width: $sm) {
      width: 70%;
      margin-bottom: 2rem;
    }
  }
  .text {
    text-align: right;
    color: $grey-color;
    font-size: 1.4rem;
    padding-left: 20%;
    @media (max-width: $sm) {
      text-align: center;
      padding-left: 0;
    }
    .number {
      font-size: 2rem;
    }
    div {
      margin-bottom: 2rem;
    }
  }
}
</style>
