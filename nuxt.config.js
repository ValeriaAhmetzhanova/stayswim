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
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js',
        type: 'text/javascript',
      },
      {
        innerHTML:
          '(function() {\n' +
          '            emailjs.init("user_ubc1MVB6m2AAMXq8JHjCF");\n' +
          '        })();',
      },
    ],
    __dangerouslyDisableSanitizers: ['script'],
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
          instructionText7:
            'Pry the film and grab it by the edge.\n' +
            'Pull the film strongly to the side, along the skin.\n' +
            '\n' +
            'Keeping the film as stretched as possible, slowly peel off the film. The\n' +
            'film will go off painlessly and will not tear!',
          instructionText8:
            '! It is not recommended to clean the STAY SWIM film under water!\n' +
            'This will be more painful, and glue particles may remain on your skin.',
          ourContacts: 'Our contacts',
          yourOrder: 'Your order',
          quantity: 'Quantity',
          price: 'Price',
          placeOrder: 'Place order',
          send: 'Send',
          sending: 'Please wait, your question is sending...',
          sent:
            'Your question was successfully sent! We will contact you soon.',
          errorNotSent:
            'Error. Please, try again later or contact us via phone call.',
          sendingOrder: 'Please wait, your order is sending...',
          sentOrder:
            'Your order was successfully sent! We will contact you soon.',
          nameRequired: 'Name is required',
          phoneRequired: 'Phone number is required',
          phoneValid: 'Phone number must be valid',
          questionRequired: 'Question is required',
          nameChars: 'Name must be less than 30 characters',
        },
        ru: {
          stayswim: 'STAY SWIM',
          questionsAndAnswers: 'Вопросы и Ответы',
          video: 'Видео',
          certificates: 'Сертификаты',
          advantages: 'Преимущества',
          instruction: 'Инструкция',
          reviews: 'Отзывы',
          whereToBuy: 'Где купить',
          buyNow: 'Купить',
          buy: 'Купить',
          footerText1: 'Самый лучший метод закрытие ран',
          footerText2: 'при активном использовании в воде',
          footerText3: '© 2021 все права сохранены',
          bannerSubtitle: 'Просто нанеси и забудь.',
          bannerText1:
            'Самый лучший метод закрытия ран при активном использовании в воде. Продукт разработан и сделан немецкими учеными.',
          bannerText2:
            'Это Революция \n' +
            // eslint-disable-next-line no-multi-str
            'В уходе и защите за кожными ранами полученными в результате падений с мотоциклов, велосипедов, скейтов и полученный травм при падение на рифы  в океане.',
          advantage1: 'Заживление в 2 раза быстрее',
          advantage2:
            'STAYSWIM позволяет воздуху и парам проходить через покрытия в рану обеспечивая естественное заживление в комфортной среде, без проникновения воды',
          advantage3: 'Пленка прозрачна и позволяет видеть процесс заживления',
          advantage4:
            'При использовании STAYSWIM раны остаются защищенными даже в соленной воде при активном движении',
          advantage5:
            'Раны полностью заживают уже на 3й-4й день при одноразовом нанесение пленки, что позволит держать повреждения в спокойном состояния не повреждая ран',
          advantage6:
            'Пленка не пропускает воду, что позволяет принимать ванну, ходить в бассейн и везти водный активный образ жизни, даже в соленной воде океана.',
          advantage7:
            'Эластичность и гибкость пленки легко позволяет наносить ее на кожную поверхность',
          typesOfFilms: 'Типы пленки:',
          typesTitle1: 'STAY SWIM в рулонах',
          typesText1: 'Упаковка для магазинов',
          typesText2:
            'Содержание: рулон пленки, памятка для клиента, инструкция',
          typesText3: ' Производство: Германия',
          typesTitle2: 'STAY SWIM  в индивидуальной упаковке',
          typesText4:
            'Специальная пленочная повязка для ухода за кожей после несчастного случая',
          stillQuestions: 'Остались вопросы?',
          name: 'Имя*',
          phone: 'Номер телефона*',
          question: 'Вопрос*',
          instructionFix: 'Инструкция нанесения пленки',
          instructionRemove: 'Инструкция по снятию пленки',
          instructionText1: 'Вырежи нужную длину',
          instructionText2: 'Сними защитный слой в две стороны ',
          instructionText3: 'Удали бумажный слой',
          instructionText4:
            'Нанеси пленку на обработанную и очищенную зону покрытия прижми жестко ее к поверхности кожи ',
          instructionText5:
            'Разгладь по всем углам, которые должны крепиться дальше от раны на 1-1.5 см',
          instructionText6:
            'В случае больших ран, необходимо закрупить пленку с наложением 1.5-2 cm.',
          instructionText7:
            'Намочите пленку и потяните за ее углы в сторону.\n' +
            'Тяните до полного открепления, можно тянуть с большим усилием.\n' +
            '\n' +
            'Не спеша отрывая вы не нанесете урона свеже зажитым ранам.',
          instructionText8: 'Не рекомендуется снимать пленку под водой',
          ourContacts: 'Наши контакты',
          yourOrder: 'Ваш заказ',
          quantity: 'Количество',
          price: 'Цена',
          placeOrder: 'Заказать',
          send: 'Отправить',
          sending: 'Пожалуйста, подождите. Ваш вопрос отправляется...',
          sent:
            'Ваш вопрос был успешно отправлен! Мы свяжемся с Вами в ближайшее время.',
          errorNotSent:
            'Произошла ошибка. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.',
          sendingOrder: 'Пожалуйста, подождите. Ваш заказ отправляется...',
          sentOrder:
            'Ваш заказ был успешно отправлен! Мы свяжемся с Вами в ближайшее время.',
          nameRequired: 'Необходимо ввести имя',
          phoneRequired: 'Необходимо ввести номер телефона',
          phoneValid: 'Введите корректный номер телефона',
          questionRequired: 'Необходимо задать вопрос',
          nameChars: 'Имя должно содержать не больше 30 знаков',
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
