<template>
  <main class="p-place-order">
    <div class="p-place-order__container">
      <h1 class="p-place-order__title">Bestelling plaatsen</h1>
      <component :is="component" @removeLogin="removeComponent"> </component>
      <div v-if="!access && !isLoggedIn" class="p-place-order__login">
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
            name="street_name"
            type="text"
            label="Straatnaam"
            validation-name="straatnaam"
            validation="optional"
          />
          <FormulateInput
            name="house_number"
            type="text"
            label="Huisnummer"
            validation-name="huisnummer"
            validation="optional"
          />
          <FormulateInput
            name="postal_code"
            type="number"
            label="Postcode"
            validation-name="postcode"
            validation="optional"
          />
          <FormulateInput
            name="city_name"
            type="text"
            label="Stad"
            validation-name="stad"
            validation="optional"
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
        street_name: '',
        house_number: '',
        postal_code: '',
        city_name: '',
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
      return this.$store.getters['auth/isLoggedIn'];
    },
    userInfo() {
      return this.$store.getters['auth/getUser'];
    },
  },
  watch: {
    userInfo() {
      this.checkLogin();
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
        .then(() => {
          this.$root.$emit('notify', 'Je bestelling is geplaatst');
          this.$router.push('/shop/order-confirmation');
        })
        .catch(() => {
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
          street_name: data.street_name,
          house_number: data.house_number,
          postal_code: data.postal_code,
          city_name: data.city_name,
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
      const code =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
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
      if (this.isLoggedIn) {
        this.formData.first_name = this.userInfo.first_name;
        this.formData.last_name = this.userInfo.last_name;
        this.formData.email = this.userInfo.email;
        this.formData.phone_number = this.userInfo.phone_number;
        this.formData.street_name = this.userInfo.street_name;
        this.formData.house_number = this.userInfo.house_number;
        this.formData.postal_code = this.userInfo.postal_code;
        this.formData.city_name = this.userInfo.city_name;
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
.p-place-order {
  min-height: 80vh;

  &__container {
    @extend .container;
  }

  padding-top: $m-site-padding;
  padding-bottom: $m-site-padding;
}

.p-place-order__login {
  margin: 3em;
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
