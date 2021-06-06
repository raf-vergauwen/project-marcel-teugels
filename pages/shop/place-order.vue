<template>
  <main class="p-place-order">
    <h1 class="p-place-order__title">Bestelling plaatsen</h1>
    <div class="p-place-order__container">
      <FormulateForm
        v-model="formData"
        @submit="createOrder"
        class="p-place-order__form"
      >
        <FormulateInput
          name="firstName"
          type="text"
          label="voornaam"
          validation-name="voornaam"
          validation="required"
        />
        <FormulateInput
          name="lastName"
          type="text"
          label="achternaam"
          validation-name="achternaam"
          validation="required"
        />
        <FormulateInput
          name="email"
          type="email"
          label="email"
          validation-name="email"
          validation="required|email"
        />
        <FormulateInput
          name="phoneNumber"
          type="number"
          label="telefoonnummer"
          validation-name="telefoonnummer"
          validation="optional"
        />
        <FormulateInput
          name="address"
          type="text"
          label="adres"
          validation-name="adres"
          validation="required"
        />
        <FormulateInput
          name="notes"
          type="textarea"
          label="notities"
          validation-name="notities"
          validation="optional"
        />
        <FormulateInput type="submit" label="Bestelling plaatsen" />
      </FormulateForm>
      <div class="p-place-order__total">
        <h2>Totaal:</h2>
        <h3>€ {{ calculate_Total }}</h3>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      shoppingList: this.$store.state.shoppingCart,
      formData: {
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        address: '',
        notes: '',
      },
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
    createOrderedItems(orderId) {
      const promiseArr = this.shoppingList.map((product) => {
        return this.$axios('items/ordered_items', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data: {
            quantity: product.quantity,
            total_price: parseFloat(product.price) * product.quantity,
            order_id: orderId,
            product_id: product.id,
          },
        });
      });

      return Promise.all(promiseArr)
        .then((values) => {
          this.$root.$emit('notify', 'Je bestelling is geplaatst');
        })
        .catch((e) => {
          this.$axios('items/orders/' + orderId, { method: 'DELETE' });
        });
    },
    createOrder(data) {
      this.$axios('items/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: {
          total_price: this.calculate_Total,
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone_number: data.phoneNumber,
          address: data.address,
          notes: data.notes,
        },
      })
        .then((response) => {
          this.orderId = response.data.data.id;

          return this.createOrderedItems(this.orderId);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss">
.p-place-order__title {
  margin: 1em;
}

.p-place-order__container {
  display: flex;
}

.p-place-order__form {
  width: 70%;
  margin-left: 2em;
}

.p-place-order__total {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
