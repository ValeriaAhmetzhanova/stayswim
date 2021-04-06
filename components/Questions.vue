<template>
  <div class="questions">
    <div class="section-title">{{ $t('stillQuestions') }}</div>
    <div class="questions-body">
      <div class="form">
        <v-form id="contact-form" ref="form" v-model="valid" lazy-validation>
          <v-text-field
            id="name"
            v-model="name"
            type="text"
            name="name"
            :label="$t('name')"
            :rules="nameRules"
            required
          ></v-text-field>
          <v-text-field
            id="number"
            v-model="number"
            type="text"
            name="number"
            :label="$t('phone')"
            required
            :rules="phoneRules"
          ></v-text-field>
          <v-text-field
            id="question"
            v-model="question"
            type="text"
            name="question"
            :label="$t('question')"
            required
            :rules="questionRules"
          ></v-text-field>
          <span id="sending" class="sending-info display-none">{{
            $t('sending')
          }}</span>
          <span id="sent" class="sending-info display-none">{{
            $t('sent')
          }}</span>
          <span id="error" class="sending-info display-none">{{
            $t('errorNotSent')
          }}</span>
          <v-btn id="buy-btn" class="buy-btn" @click="handleSubmit">{{
            $t('send')
          }}</v-btn>
        </v-form>
      </div>
      <img src="/questions.png" alt="img" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Questions',
  data() {
    return {
      valid: true,
      name: '',
      number: '',
      question: '',
      nameRules: [
        (v) => !!v || this.$i18n.t('nameRequired'),
        (v) => (v && v.length <= 30) || this.$i18n.t('nameChars'),
      ],
      phoneRules: [
        (v) => !!v || this.$i18n.t('phoneRequired'),
        (v) => /^\d+$/.test(v) || this.$i18n.t('phoneValid'),
      ],
      questionRules: [(v) => !!v || this.$i18n.t('questionRequired')],
    }
  },
  methods: {
    handleSubmit() {
      document.getElementById('sent').classList.add('display-none')
      document.getElementById('error').classList.add('display-none')
      if (this.$refs.form.validate()) {
        document.getElementById('sending').classList.remove('display-none')
        // eslint-disable-next-line no-undef
        emailjs
          .sendForm(
            'default_service',
            'template_rd5ck3t',
            document.getElementById('contact-form')
          )
          .then(
            function () {
              document.getElementById('sending').classList.add('display-none')
              document.getElementById('sent').classList.remove('display-none')
            },
            function (error) {
              document.getElementById('sending').classList.add('display-none')
              document.getElementById('error').classList.remove('display-none')
              console.log('FAILED...', error)
            }
          )
      }
    },
  },
}
</script>

<style lang="scss">
.display-none {
  display: none !important;
}
.sending-info {
  display: block;
  margin: 1rem;
}
.questions {
  margin: 3rem auto;
  .questions-body {
    display: flex;
    .form {
      width: 50%;
      align-items: center;
      display: flex;
      @media (max-width: $sm) {
        width: 100%;
      }
      .v-form {
        width: 80%;
        margin: 0 auto;
        text-align: center;
      }
    }
    img {
      width: 50%;
      height: 50%;
      @media (max-width: $sm) {
        display: none;
      }
    }
  }
}
</style>
