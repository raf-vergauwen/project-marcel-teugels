<template>
  <main class="p-profile">
    <div class="p-profile__container">
      <h1>Profiel</h1>
      <FormulateForm
        v-model="userInfo"
        class="p-profile__form"
        @submit="checkEmail"
      >
        <FormulateInput
          name="first_name"
          type="text"
          label="Voornaam"
          validation-name="voornaam"
          validation="optional"
        />
        <FormulateInput
          name="last_name"
          type="text"
          label="Achternaam"
          validation-name="achternaam"
          validation="optional"
        />
        <FormulateInput
          name="password"
          type="password"
          label="Wachtwoord"
          validation-name="wachtwoord"
          validation="optional"
        />
        <FormulateInput
          name="password_confirm"
          type="password"
          label="Wachtwoord herhalen"
          validation="required|confirm"
          validation-name="wachtwoord herhalen"
        />
        <FormulateInput
          v-model="userInfo.email"
          name="email"
          type="email"
          label="email"
          validation-name="email"
          validation="optional|email"
        />
        <FormulateInput
          name="phone_number"
          type="number"
          label="Telefoonnummer"
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
          type="number"
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
        <FormulateInput type="submit" label="Profiel updaten" />
      </FormulateForm>
    </div>
    <div class="p-profile__orders">
      <OrderItems
        v-for="order in orders"
        :key="order.id"
        class="p-storefront__product-list__item"
        :order="order"
      />
    </div>
  </main>
</template>

<script>
export default {
  name: 'ProfilePage',
  middleware: 'auth',
  data() {
    return {
      oldEmail: '',
      userInfo: {
        first_name: '',
        last_name: '',
        password: '',
        passwordCheck: '',
        email: '',
        phone_number: 0,
        street_name: '',
        house_number: 0,
        postal_code: 0,
        city_name: '',
        location: '',
      },
      orders: [],
    };
  },
  computed: {
    access_token() {
      return sessionStorage.getItem('access_token');
    },
  },
  created() {
    this.$axios('users/me', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + this.access_token,
      },
      fields: ['*,orders.*', '*,orders.ordered_items.*'],
    })
      .then((response) => {
        this.oldEmail = response.data.data.email;
        console.log(response);
        this.userInfo = response.data.data;
        this.userInfo.password = '';
        this.userInfo.passwordCheck = '';
      })
      .catch((err) => {
        console.error(err);
        sessionStorage.removeItem('access_token');
        this.$router.push('/login');
      });
  },
  methods: {
    checkEmail() {
      if (this.userInfo.email === this.oldEmail) {
        this.updateAccount();
      } else {
        this.updateAccountEmail();
      }
    },
    updateAccountEmail() {
      this.$axios('users/me', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.access_token,
        },
        data: {
          first_name: this.userInfo.firstName,
          last_name: this.userInfo.lastName,
          email: this.userInfo.email,
          password: this.userInfo.password,
          location: this.userInfo.location,
        },
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    updateAccount() {
      this.$axios('users/me', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.access_token,
        },
        data: {
          first_name: this.userInfo.firstName,
          last_name: this.userInfo.lastName,
          password: this.userInfo.password,
          location: this.userInfo.location,
        },
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss">
.p-profile {
  &__container {
    @extend .container;
  }
  padding-top: $m-site-padding;
  padding-bottom: $m-site-padding;
}

.p-profile__form {
  display: grid;
  grid-template-columns: 45% 45%;
  column-gap: $s-site-padding;
}
</style>
