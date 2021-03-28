import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - stayswim',
    title: 'stayswim',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/vue-awesome-swiper', mode: 'ssr' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-i18n'],
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          stayswim: 'STAY SWIM',
          questionsAndAnswers: 'Questions and answers',
          video: 'Video',
          certificates: 'Certificates',
          advantages: 'Advantages',
          instruction: 'Instruction',
          reviews: 'Reviews',
          whereToBuy: 'Where to buy',
          buyNow: 'Buy now',
          buy: 'Buy',
          footerText1: 'The best cover for swimming',
          footerText2: 'with deep wounds or scars',
          footerText3: '© 2021 All rights reserved',
          bannerSubtitle: 'Made it, stuck it and forgot!',
          bannerText1:
            'The best cover for swimming with deep wounds or scars. Made in Germany!',
          bannerText2:
            'REVOLUTION in a skin care and protection after getting a wounds on a reef in the ocean or in a bike accident - STAY SWIM!',
          advantage1: '2 times faster',
          advantage2:
            'STAY SWIM allows air and steam to pass through it to provide natural skin breathing and feeling of comfort',
          advantage3:
            'The film is completely transparent, which allows you to monitor the healing process',
          advantage4:
            'Using STAY SWIM will help your wounds stay protect from outside infections even in salt water',
          advantage5:
            'The wounds completely heals on the 3th-4th day! The film sticks only 1 time, which allows you to save the sacrum and provide accelerated "wet" healing',
          advantage6:
            'The film repels water, so you can take a bath and even swim or surfing in the ocean with comfortable',
          advantage7:
            'The elasticity and extensibility of the film make it easy and tight to fix it on the skin, including the folds',
          typesOfFilms: 'Types of fast films:',
          typesTitle1: 'STAY SWIM in rolls',
          typesText1: 'Package for shops',
          typesText2:
            'Content: roll of film, memo for the client, instructions',
          typesText3: ' Production: Germany',
          typesTitle2: 'STAY SWIM in an individual package',
          typesText4: 'Special film dressing for skin care after accident',
          stillQuestions: 'Still have any questions?',
          name: 'Name*',
          phone: 'Phone number*',
          question: 'Question*',
          instructionFix: 'Instruction of fixing',
          instructionRemove: 'Instruction of removing',
          instructionText1: 'Cut the required film length.',
          instructionText2:
            'When bending the paper layer, begin to separate it from the film.',
          instructionText3: 'Remove the paper layer.',
          instructionText4:
            'Pull the film and press it to the skin over the entire surface of the wound,\n' +
            'so that the film extends 1-1.5 cm beyond the outer edge of the wound.',
          instructionText5:
            'With smoothing movements, press the film more tightly to the skin,\n' +
            'especially at the edges and remove the auxiliary film.',
          instructionText6:
            'In the case of a large wounds or scar, it is necessary to fix the film with\n' +
            'an overlap about 1.5-2 cm.',
          instructionText7: 'Remove the paper layer.',
          instructionText8:
            '! It is not recommended to clean the STAY SWIM film under water!\n' +
            'This will be more painful, and glue particles may remain on your skin.',
        },
        ru: {
          welcome: 'Bienvenue',
        },
      },
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
