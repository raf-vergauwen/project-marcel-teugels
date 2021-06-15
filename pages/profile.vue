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
          validation="optional|confirm"
          validation-name="wachtwoord"
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
        <FormulateInput type="submit" label="Profiel updaten" />
      </FormulateForm>
    </div>
    <div class="p-profile__orders">
      <ProfileOrders
        v-for="order in orders"
        :key="order.id"
        :order="order"
        class="p-profile__orders__component"
      />
    </div>
  </main>
</template>

<script>
import ProfileOrders from '~/components/ProfileOrders';

export default {
  name: 'ProfilePage',
  components: { ProfileOrders },
  middleware: 'auth',
  data() {
    return {
      oldEmail: '',
      userInfo: {
        first_name: '',
        last_name: '',
        password: '',
        email: '',
        phone_number: '',
        street_name: '',
        house_number: '',
        postal_code: '',
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
      params: {
        fields: [
          '*,orders.*',
          '*,orders.ordered_items.*',
          '*,orders.ordered_items.product_id.*',
        ],
      },
    })
      .then((response) => {
        console.log(response);
        this.oldEmail = response.data.data.email;
        this.userInfo = response.data.data;
        // this.userInfo.password = '';
        this.orders = response.data.data.orders;
        console.log(this.orders);
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
          first_name: this.userInfo.first_name,
          last_name: this.userInfo.last_name,
          email: this.userInfo.email,
          phone_number: this.userInfo.phone_number,
          street_name: this.userInfo.street_name,
          house_number: this.userInfo.house_number,
          postal_code: this.userInfo.postal_code,
          city_name: this.userInfo.city_name,
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
          phone_number: this.userInfo.phone_number,
          street_name: this.userInfo.street_name,
          house_number: this.userInfo.house_number,
          postal_code: this.userInfo.postal_code,
          city_name: this.userInfo.city_name,
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

  @include md() {
    grid-template-columns: 100%;
  }
}

.p-profile__orders {
  @extend .container;
}

.p-profile__orders__component {
  margin-top: $m-site-padding;
  margin-bottom: $m-site-padding;
  background-color: $light-blue;
  padding: $m-site-padding;
  border-radius: 15px;
  box-shadow: $box-shadow;
}
</style>
