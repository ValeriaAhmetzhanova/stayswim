<template>
  <div>
    <Banner />
    <Advantages />
    <Types />
  </div>
</template>

<script>
import Banner from '../components/home/Banner'
import Advantages from '../components/home/Advantages'
import Types from '../components/home/Types'
export default {
  components: { Types, Advantages, Banner },
}
</script>
