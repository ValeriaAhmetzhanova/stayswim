<template>
  <div>
    <Banner />
    <Advantages />
    <Instructions />
    <Types />
    <Questions />
  </div>
</template>

<script>
import Banner from '../components/home/Banner'
import Advantages from '../components/home/Advantages'
import Types from '../components/home/Types'
import Questions from '../components/Questions'
import Instructions from '../components/home/Instructions'
export default {
  components: { Instructions, Questions, Types, Advantages, Banner },
}
</script>
