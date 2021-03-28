<template>
  <div id="advantages" class="advantages">
    <div class="section-title">{{ $t('advantages') }}</div>
    <div class="advantages-body">
      <div class="advantages-left">
        <div class="advantage-item">{{ $t('advantage1') }}</div>
        <div class="advantage-item">{{ $t('advantage2') }}</div>
        <div class="advantage-item">{{ $t('advantage3') }}</div>
        <div class="advantage-item">{{ $t('advantage4') }}</div>
      </div>
      <div class="advantages-right">
        <div class="advantage-item">{{ $t('advantage5') }}</div>
        <div class="advantage-item">{{ $t('advantage6') }}</div>
        <div class="advantage-item">{{ $t('advantage7') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Advantages',
}
</script>

<style lang="scss">
.section-title {
  text-align: center;
  color: $acc-blue-color;
  font-size: 3rem;
  font-weight: 600;
  @media (max-width: $sm) {
    font-size: 2rem;
  }
}
.advantages {
  .advantages-body {
    background-image: url('static/product1.png');
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    padding: 50px 20px;
    @media (max-width: $sm) {
      background-image: none;
      flex-direction: column;
    }
    .advantages-left {
      width: 25%;
      @media (max-width: $sm) {
        width: 90%;
        margin: 0 auto;
      }
      .advantage-item {
        &:before {
          position: absolute;
          top: -60px;
          left: -25px;
          font-size: 5rem;
          font-weight: 600;
          color: #161616;
          z-index: -1;
        }
        &:nth-child(1) {
          &:before {
            content: '1';
          }
        }
        &:nth-child(2) {
          &:before {
            content: '2';
          }
        }
        &:nth-child(3) {
          &:before {
            content: '3';
          }
        }
        &:nth-child(4) {
          &:before {
            content: '4';
          }
        }
      }
    }
    .advantages-right {
      width: 25%;
      margin-left: auto;
      text-align: right;
      @media (max-width: $sm) {
        width: 90%;
        margin: 0 auto;
        text-align: left;
      }
      .advantage-item {
        &:before {
          position: absolute;
          top: -60px;
          right: -25px;
          font-size: 5rem;
          font-weight: 600;
          color: #161616;
          z-index: -1;
          @media (max-width: $sm) {
            left: -25px;
            right: auto;
          }
        }
        &:nth-child(1) {
          &:before {
            content: '5';
          }
        }
        &:nth-child(2) {
          &:before {
            content: '6';
          }
        }
        &:nth-child(3) {
          &:before {
            content: '7';
          }
        }
      }
    }
    .advantage-item {
      margin-bottom: 3rem;
      position: relative;
      z-index: 2;
    }
  }
}
</style>
