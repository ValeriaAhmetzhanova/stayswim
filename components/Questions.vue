<template>
  <div class="questions">
    <div class="section-title">{{ $t('stillQuestions') }}</div>
    <div class="questions-body">
      <div class="form">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :label="$t('name')"
            :rules="nameRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="number"
            :label="$t('phone')"
            required
            :rules="phoneRules"
          ></v-text-field>
          <v-text-field
            v-model="question"
            :label="$t('question')"
            required
            :rules="questionRules"
          ></v-text-field>
          <v-btn class="buy-btn" @click="handleSubmit">{{ $t('send') }}</v-btn>
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
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      phoneRules: [
        (v) => !!v || 'Phone number  is required',
        (v) => /^\d+$/.test(v) || 'Phone number must be valid',
      ],
      questionRules: [(v) => !!v || 'Question is required'],
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.$refs.form.validate())
    },
  },
}
</script>

<style lang="scss">
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
      @media (max-width: $sm) {
        display: none;
      }
    }
  }
}
</style>
