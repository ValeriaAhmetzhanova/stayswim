<template>
  <div>
    <v-app-bar class="header" color="transparent" flat>
      <div class="logo_wrapper nav-item">
        <img class="logo_img" src="logo.svg" alt="logo" />
      </div>
      <v-spacer></v-spacer>
      <nuxt-link :to="localePath('/')" class="nav-item">{{
        $t('stayswim')
      }}</nuxt-link>
      <nuxt-link :to="localePath('/certificates')" class="nav-item">{{
        $t('certificates')
      }}</nuxt-link>
      <nuxt-link :to="localePath('/#advantages')" class="nav-item">
        {{ $t('advantages') }}
      </nuxt-link>
      <nuxt-link :to="localePath('/#instructions')" class="nav-item">
        {{ $t('instruction') }}
      </nuxt-link>
      <nuxt-link :to="localePath('/location')" class="nav-item">{{
        $t('whereToBuy')
      }}</nuxt-link>
      <nuxt-link :to="localePath('/buyNow')" class="nav-item">{{
        $t('buyNow')
      }}</nuxt-link>
      <v-spacer></v-spacer>
      <LanguageSwitch />
      <div class="acc-blue">+62 813 3703 3645</div>
    </v-app-bar>
    <v-app-bar class="header-mobile" color="transparent" flat>
      <v-app-bar-nav-icon @click="toggleMenu"></v-app-bar-nav-icon>
      <v-spacer />
      <LanguageSwitch />
    </v-app-bar>
    <div v-if="menuIsActive" class="overlay" @click="toggleMenu">
      <ul class="menu_popup" @click.stop>
        <li @click="toggleMenu">
          <nuxt-link :to="localePath('/')" class="nav-item">{{
            $t('stayswim')
          }}</nuxt-link>
          <hr />
        </li>
        <li @click="toggleMenu">
          <nuxt-link :to="localePath('/certificates')" class="nav-item">{{
            $t('certificates')
          }}</nuxt-link>
          <hr />
        </li>
        <li @click="toggleMenu">
          <nuxt-link :to="localePath('/#advantages')" class="nav-item">
            {{ $t('advantages') }}
          </nuxt-link>
          <hr />
        </li>
        <li @click="toggleMenu">
          <nuxt-link :to="localePath('/#instructions')" class="nav-item">
            {{ $t('instruction') }}
          </nuxt-link>
          <hr />
        </li>
        <li @click="toggleMenu">
          <nuxt-link :to="localePath('/location')" class="nav-item">{{
            $t('whereToBuy')
          }}</nuxt-link>
          <hr />
        </li>
        <li @click="toggleMenu">
          <nuxt-link :to="localePath('/buyNow')" class="nav-item">{{
            $t('buyNow')
          }}</nuxt-link>
          <hr />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menuIsActive: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuIsActive = !this.menuIsActive
    },
  },
}
</script>

<style lang="scss">
.overlay {
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 10;
}
.acc-blue {
  color: $acc-blue-color;
}
.header-mobile {
  display: none;
  text-align: center;
  @media (max-width: $md) {
    display: block;
  }
}
.menu_popup {
  position: fixed;
  top: 15%;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  li {
    list-style: none;
    line-height: 2rem;
    a {
      text-decoration: none;
      font-size: 1.3rem;
      color: $darkgrey-color;
    }
    .nuxt-link-exact-active {
      color: $acc-blue-color;
    }
  }
}
.header {
  max-height: 100px;
  padding: 20px 30px;
  @media (max-width: $md) {
    display: none;
  }
  .logo_wrapper {
    border: 1px solid $acc-blue-color;
    border-radius: 50%;
    height: 75px;
    .logo_img {
      padding: 15px;
      height: 75px;
    }
  }
  .nav-item {
    margin-right: 2rem;
    color: white;
    text-decoration: none;
    &:hover {
      color: $acc-blue-color;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  .nuxt-link-exact-active {
    color: $acc-blue-color;
  }
}
</style>
