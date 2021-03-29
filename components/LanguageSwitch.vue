<template>
  <div class="text-center switcher">
    <v-menu offset-y>
      <template #activator="{ on, attrs }">
        <v-btn dark v-bind="attrs" v-on="on">{{ $i18n.locale }}</v-btn>
      </template>
      <v-list>
        <v-list-item>
          <nuxt-link class="locale" :to="switchLocalePath('en')">en</nuxt-link>
        </v-list-item>
        <v-list-item>
          <nuxt-link class="locale" :to="switchLocalePath('ru')">ru</nuxt-link>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitch',
}
</script>

<style lang="scss">
.switcher {
  margin: 0 1rem;
  @media (max-width: $md) {
    margin-right: 20%;
    margin-top: 0.5rem;
  }
}
.locale {
  color: white !important;
  text-decoration: none;
  margin: 0 auto;
}
</style>
