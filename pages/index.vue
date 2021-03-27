<template>
  <div>
    <Banner />
    <Advantages />
    <Types />
    <Questions />
  </div>
</template>

<script>
import Banner from '../components/home/Banner'
import Advantages from '../components/home/Advantages'
import Types from '../components/home/Types'
import Questions from '../components/Questions'
export default {
  components: { Questions, Types, Advantages, Banner },
}
</script>
