<template>
  <div>
    <div class="page-content">
      <div class="section-title">{{ $t('yourOrder') }}</div>
      <div class="order-row">
        <div class="image">
          <div>{{ $t('typesTitle2') }}</div>
          <img src="/product2.png" alt="rolls" />
        </div>
        <div class="table">
          <table>
            <tr>
              <th></th>
              <th>{{ $t('quantity') }}</th>
              <th>{{ $t('price') }}</th>
            </tr>
            <tr>
              <td>10cm*30cm</td>
              <td>
                <span class="sign minus" @click="handleMinus(1)">-</span>
                {{ type1Quantity }}
                <span class="sign plus" @click="handlePlus(1)">+</span>
              </td>
              <td>$ {{ type1Price }}</td>
            </tr>
            <tr>
              <td>10cm*20cm</td>
              <td>
                <span class="sign minus" @click="handleMinus(2)">-</span>
                {{ type2Quantity }}
                <span class="sign plus" @click="handlePlus(2)">+</span>
              </td>
              <td>$ {{ type2Price }}</td>
            </tr>
            <tr>
              <td>10cm*15cm</td>
              <td>
                <span class="sign minus" @click="handleMinus(3)">-</span>
                {{ type3Quantity }}
                <span class="sign plus" @click="handlePlus(3)">+</span>
              </td>
              <td>$ {{ type3Price }}</td>
            </tr>
            <tr>
              <td>5cm*7cm</td>
              <td>
                <span class="sign minus" @click="handleMinus(4)">-</span>
                {{ type4Quantity }}
                <span class="sign plus" @click="handlePlus(4)">+</span>
              </td>
              <td>$ {{ type4Price }}</td>
            </tr>
          </table>
          <v-form ref="number" v-model="valid" lazy-validation>
            <v-text-field
              v-model="number"
              :label="$t('phone')"
              required
              :rules="phoneRules"
              class="phone"
            ></v-text-field>
          </v-form>
          <div class="total">$ {{ total }}</div>
          <div class="buy">
            <span id="sendingOrder" class="sending-info display-none">{{
              $t('sendingOrder')
            }}</span>
            <span id="sentOrder" class="sending-info display-none">{{
              $t('sentOrder')
            }}</span>
            <span id="errorOrder" class="sending-info display-none">{{
              $t('errorNotSent')
            }}</span>
            <span class="buy-btn" @click="sendOrder">{{
              $t('placeOrder')
            }}</span>
          </div>
        </div>
      </div>
      <form id="order-form" class="display-none">
        <input id="message" type="text" name="message" :value="message" />
      </form>
    </div>
    <Questions />
  </div>
</template>

<script>
export default {
  name: 'BuyNow',
  data() {
    return {
      valid: true,
      types: 4,
      type1Quantity: 0,
      type2Quantity: 0,
      type3Quantity: 0,
      type4Quantity: 0,
      type1Price: 7,
      type2Price: 5,
      type3Price: 4,
      type4Price: 2.5,
      number: '',
      phoneRules: [
        (v) => !!v || this.$i18n.t('phoneRequired'),
        (v) => /^\d+$/.test(v) || this.$i18n.t('phoneValid'),
      ],
    }
  },
  computed: {
    total() {
      let result = 0
      for (let i = 1; i <= this.types; i++) {
        const quantity = `type${i}Quantity`
        const price = `type${i}Price`
        result = result + this[quantity] * this[price]
      }
      return result
    },
    message() {
      return `The client's phone number: ${this.number}. \n 10cm*30cm items: ${this.type1Quantity}. \n 10cm*20cm items: ${this.type2Quantity}. \n 10cm*15cm items: ${this.type3Quantity}. \n 5cm*7cm items: ${this.type4Quantity}. \n Total order price: ${this.total}.`
    },
  },
  methods: {
    handlePlus(type) {
      const param = `type${type}Quantity`
      if (this[param] < 1000) {
        this[param] = this[param] + 1
      }
    },
    handleMinus(type) {
      const param = `type${type}Quantity`
      if (this[param] > 0) {
        this[param] = this[param] - 1
      }
    },
    sendOrder() {
      document.getElementById('sentOrder').classList.add('display-none')
      document.getElementById('errorOrder').classList.add('display-none')
      if (this.$refs.number.validate()) {
        document.getElementById('sendingOrder').classList.remove('display-none')
        // eslint-disable-next-line no-undef
        emailjs
          .sendForm(
            'default_service',
            'template_n2nzjss',
            document.getElementById('order-form')
          )
          .then(
            function () {
              document
                .getElementById('sendingOrder')
                .classList.add('display-none')
              document
                .getElementById('sentOrder')
                .classList.remove('display-none')
            },
            function (error) {
              document
                .getElementById('sendingOrder')
                .classList.add('display-none')
              document
                .getElementById('errorOrder')
                .classList.remove('display-none')
              console.log('FAILED...', error)
            }
          )
      }
    },
  },
}
</script>

<style lang="scss">
.order-row {
  display: flex;
  margin: 2rem 0;
  @media (max-width: $md) {
    flex-direction: column;
  }
  .image {
    width: 30%;
    margin-top: 4rem;
    text-align: center;
    @media (max-width: $md) {
      width: 100%;
    }
  }
  .table {
    width: 70%;
    margin: 3rem 0;
    @media (max-width: $md) {
      width: 100%;
    }
    .phone {
      width: 30%;
      margin: 2rem 0 0 10rem;
      @media (max-width: $md) {
        margin: 2rem auto;
      }
      @media (max-width: $sm) {
        width: 60%;
      }
    }
    .total {
      text-align: right;
      width: 50%;
      margin: 3rem auto;
      color: $acc-blue-color;
      font-size: 2rem;
      font-weight: 600;
      @media (max-width: $md) {
        display: none;
      }
    }
    .buy {
      text-align: right;
      width: 50%;
      margin: 0 auto;
      @media (max-width: $md) {
        width: 100%;
        text-align: center;
      }
    }
    table {
      font-size: 1.2rem;
      border-collapse: separate;
      border-spacing: 0 1em;
      margin: 0 auto;
      @media (max-width: $md) {
        display: none;
      }
      th {
        font-size: 2rem;
      }
      tr {
        margin: 2rem 0;
      }
      td {
        text-align: center;
        padding: 0 5rem;
        .sign {
          background-color: $darkgrey-color;
          border-radius: 50%;
          cursor: pointer;
        }
        .minus {
          padding: 2px 10px;
          margin-right: 15px;
        }
        .plus {
          padding: 2px 8px;
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
