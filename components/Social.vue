<template>
  <a href="https://www.instagram.com/stayswim/" target="_blank" class="social">
    <img src="/icons/instagram.svg" alt="" />
  </a>
</template>

<script>
export default {
  name: 'Social',
}
</script>

<style lang="scss">
.social {
  position: fixed;
  right: 5%;
  top: 50%;
  z-index: 10;
  @media (max-width: $sm) {
    top: 2.5%;
    text-align: center;
  }
  img {
    @media (max-width: $sm) {
      width: 70%;
    }
  }
}
</style>
