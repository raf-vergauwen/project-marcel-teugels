<template>
  <main class="p-place-order">
    <h1 class="p-place-order__title">Bestelling plaatsen</h1>
    <component :is="component" v-on:removeLogin="removeComponent"> </component>
    <div v-if="!access && isLoggedIn">
      <button @click="component = 'Login'">Log in</button>
      <button @click="generateGuestId">Ga door als gast</button>
    </div>
    <div v-else class="p-place-order__form-container">
      <FormulateForm
        v-model="formData"
        class="p-place-order__form"
        @submit="createOrder"
      >
        <FormulateInput
          name="first_name"
          type="text"
          label="voornaam"
          validation-name="voornaam"
          validation="required"
        />
        <FormulateInput
          name="last_name"
          type="text"
          label="achternaam"
          validation-name="achternaam"
          validation="required"
        />
        <FormulateInput
          v-model="formData.email"
          name="email"
          type="email"
          label="email"
          validation-name="email"
          validation="required|email"
        />
        <FormulateInput
          name="phone_number"
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
        user_id: null,
      },
      access: false,
      component: null,
    };
  },
  computed: {
    calculate_Total() {
      return this.shoppingList.reduce((acc, product) => {
        return acc + parseFloat(product.price) * product.quantity;
      }, 0);
    },
    isLoggedIn() {
      return !this.$store.getters['auth/isLoggedIn'];
    },
    userInfo() {
      return this.$store.getters['auth/getUser'];
    },
  },
  created() {
    this.checkGuestId();
    this.checkLogin();
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
          this.$router.push('/shop/order-confirmation');
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
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          phone_number: data.phone_number,
          address: data.address,
          notes: data.notes,
          user_id: this.formData.user_id,
        },
      })
        .then((response) => {
          this.orderId = response.data.data.id;
          this.$store.state.orderId = response.data.data.id;

          return this.createOrderedItems(this.orderId);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    generateGuestId() {
      let code = '';
      for (let i = 0; i < 10; i++) {
        code += Math.floor(Math.random() * 9) + 0;
      }
      sessionStorage.setItem('guestId', code);
      // this.formData.user_id = code;
      this.access = true;
    },
    checkGuestId() {
      if (sessionStorage.getItem('guestId') !== null && this.access === false) {
        this.access = true;
      }
    },
    checkLogin() {
      if (!this.isLoggedIn) {
        this.formData.first_name = this.userInfo.first_name;
        this.formData.last_name = this.userInfo.last_name;
        this.formData.email = this.userInfo.email;
        this.formData.phone_number = this.userInfo.phone_number;
        this.formData.address = this.userInfo.location;
        this.formData.user_id = this.userInfo.id;
      }
    },
    removeComponent() {
      this.component = null;
      this.checkLogin();
    },
  },
};
</script>

<style lang="scss">
.p-place-order__title {
  margin: 1em;
}

.p-place-order__form-container {
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
