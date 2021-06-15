<template>
  <main class="p-payment-confirmation">
    <div class="p-payment-confirmation__container">
      <div class="p-payment-confirmation__contact-info">
        <div class="p-payment-confirmation__costumer-details">
          <img
            src="http://157.230.126.154/assets/d4cb02b1-d712-4db3-996c-78049f3d7c8e"
            alt=""
            class="p-payment-confirmation__logo"
          />
          <p>{{ name }}</p>
          <p>{{ street }}</p>
          <p>{{ city }}</p>
          <p>{{ phoneNumber }}</p>
        </div>
        <div class="p-payment-confirmation__seller-details">
          <p>Marcel Teugels</p>
          <p>Greinerstraat 12</p>
          <p>2660 Antwerpen</p>
          <p>+32 474 22 56 08</p>
          <p>marcel_teugels@hotmail.com</p>
          <p>Btw-nr: BE 0896.755.397</p>
          <p>IBAN: BE32 3770 9165 1802</p>
        </div>
      </div>
      <div class="p-payment-confirmation__order-info">
        <div class="p-payment-confirmation__invoice-info">
          <h3>Factuur</h3>
          <p>
            Datum: {{ date.getDate() }}/{{ date.getMonth() + 1 }}/{{
              date.getFullYear()
            }}
          </p>
          <p>Factuurnummer: {{ id }}</p>
        </div>
        <table class="p-payment-confirmation__table">
          <tr>
            <th>Beschrijving</th>
            <th>Aantal</th>
            <th>Stukprijs</th>
            <th>Bedrag EUR</th>
          </tr>
          <InvoiceProduct
            v-for="orderedItem in orderedItems"
            :key="orderedItem.id"
            :ordered-item="orderedItem"
          />
        </table>
      </div>
      <div class="p-payment-confirmation__total">
        <table>
          <tr>
            <th>Subtotaal:</th>
            <td>{{ totalPrice }}</td>
          </tr>
          <tr>
            <th>Verzendkosten:</th>
            <td>{{ shippingPrice }}</td>
          </tr>
          <tr>
            <th>Totaal:</th>
            <td>
              {{ parseFloat(totalPrice) + parseFloat(shippingPrice) }} EUR
            </td>
          </tr>
        </table>
        <div class="print-hide">
          <button :disabled="disabled" @click="confirmPayment">Akkoord</button>
          <button :disabled="disabled">Niet akkoord</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import InvoiceProduct from '~/components/InvoiceProduct';

export default {
  name: 'PaymentConfirmationPage',
  components: { InvoiceProduct },
  data() {
    return {
      code: this.$route.params.code,
      id: '',
      name: '',
      street: '',
      city: '',
      phoneNumber: '',
      date: new Date(),
      orderedItems: [],
      totalPrice: '',
      shippingPrice: 1,
      disabled: false,
    };
  },
  fetch() {
    return this.fetchOrder();
  },
  computed: {},
  methods: {
    confirmPayment() {
      this.$axios('items/orders/' + this.id, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        data: {
          payment_confirmation: true,
        },
      })
        .then((response) => {
          console.log(response.data);
          this.disabled = true;
          this.$root.$emit(
            'notify',
            'Je betaling is bevestigd, uw bestelling is onderweg',
          );
        })
        .catch((err) => {
          console.error(err);
        });
    },
    fetchOrder() {
      this.$axios('items/orders/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          filter: { code: { _eq: this.code } },
          fields: ['*,ordered_items.*', '*,ordered_items.product_id.*'],
        },
      })
        .then((response) => {
          this.orderData = response.data.data[0];
          console.log(this.orderData);
          this.id = this.orderData.id;
          this.name =
            this.orderData.first_name + ' ' + this.orderData.last_name;
          this.street =
            this.orderData.street_name + ' ' + this.orderData.house_number;
          this.city =
            this.orderData.postal_code + ' ' + this.orderData.city_name;
          this.phoneNumber = this.orderData.phone_number;
          this.orderedItems = this.orderData.ordered_items;
          this.totalPrice = this.orderData.total_price;
          if (this.orderData.shipping_price === null) {
            this.shippingPrice = 1;
          } else {
            this.shippingPrice = this.orderData.shipping_price;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss">
.p-payment-confirmation {
  &__container {
    @extend .container;
  }
  padding-top: $m-site-padding;
  padding-bottom: $m-site-padding;

  &__logo {
    width: 50px;
    height: 50px;
    margin-bottom: $site-padding;
  }
}

.p-payment-confirmation__contact-info {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: $m-site-padding;
}

.p-payment-confirmation__order-info {
  margin-left: $m-site-padding;
}

.p-payment-confirmation__invoice-info {
  margin-bottom: $m-site-padding;
}

.p-payment-confirmation__table {
  width: 100%;
  margin-bottom: 8em;
}

.p-payment-confirmation__total {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
}

@media print {
  .print-hide {
    display: none;
  }
}
</style>
