<template>
  <main class="p-payment-confirmation-page">
    <div class="p-payment-confirmation__container">
      <div class="p-payment-confirmation__contact-info">
        <div class="p-payment-confirmation__costumer-details">
          <p>{{ name }}</p>
          <p>{{ address }}</p>
          <p>plaats</p>
          <p>gsm: {{ phoneNumber }}</p>
        </div>
        <div class="p-payment-confirmation__seller-details">
          <p>Marcel Teugels</p>
          <p>Straat 28</p>
          <p>2000 Antwerpen</p>
          <p>email: marcel_teugels@hotmail.com</p>
          <p>gsm:</p>
          <p>Btw-nummer</p>
          <p>Rekeningnummer</p>
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
          <p>Factuurnummer:</p>
        </div>
        <table style="width: 100%">
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
      name: '',
      address: '',
      phoneNumber: '',
      date: new Date(),
      orderedItems: [],
    };
  },
  fetch() {
    return this.fetchOrder();
  },
  computed: {},
  methods: {
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

          this.name =
            this.orderData.first_name + ' ' + this.orderData.last_name;
          this.address = this.orderData.address;
          this.phoneNumber = this.orderData.phone_number;
          this.orderedItems = this.orderData.ordered_items;
          console.log(this.orderedItems);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss">
.p-payment-confirmation__contact-info {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
