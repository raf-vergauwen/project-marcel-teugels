<template>
  <main class="p-order-confirmation">
    <h1 class="p-order-confirmation__title">Bestelling bevestigen</h1>
    <div class="p-order-confirmation__container">
      <div class="p-order-confirmation__text">
        <p>Bedankt voor u bestelling.</p>
        <p>
          De verzendkosten worden berekend en u zal tijdig via mail op de hoogte
          worden gebracht. Bij deze gaat akkoord met de voorwaarden.
        </p>
        <button @click="confirmOrder">Akkoord</button>
        <button @click="cancelOrder">Niet akkoord</button>
      </div>
      <div class="p-order-confirmation__total">
        <h3>Rekening</h3>
        <h5 v-for="product in shoppingList" :key="product.id">
          {{ getQuantity(product) }} x {{ product.price }} =
          {{ getQuantity(product) * product.price }}
        </h5>
        <h3>Totaal: € {{ calculate_Total }}</h3>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      shoppingList: this.$store.state.shoppingCart,
    };
  },
  computed: {
    calculate_Total() {
      return this.shoppingList.reduce((acc, product) => {
        return acc + parseFloat(product.price) * product.quantity;
      }, 0);
    },
  },
  methods: {
    generateUniqueCode() {
      const code = Math.round(Date.now() * Math.random());
      console.log(code);
    },
    getQuantity(product) {
      return this.$store.getters.productQuantity(product);
    },
    confirmOrder() {
      this.$axios('items/orders/' + this.$store.state.orderId, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        data: {
          order_confirmation: true,
        },
      })
        .then((response) => {
          console.log(response.data);
          this.generateUniqueCode();
          this.$root.$emit('notify', 'Je bestelling is bevestigd');
        })
        .catch((err) => {
          console.error(err);
        });
    },
    cancelOrder() {
      this.$root.$emit('notify', 'Je bestelling is geannuleerd');
    },
  },
};
</script>

<style lang="scss">
.p-order-confirmation__title {
  margin: 1em;
}

.p-order-confirmation__container {
  display: flex;
}

.p-order-confirmation__text {
  width: 70%;
  margin-left: 2em;
}

.p-order-confirmation__total {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
