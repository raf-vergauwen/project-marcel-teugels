<template>
  <main class="p-profile">
    <div class="p-profile__container">
      <h1>Profile</h1>
      <FormulateInput
        v-model="userInfo.firstName"
        name="first name"
        type="text"
        label="first name"
      />
      <FormulateInput
        v-model="userInfo.lastName"
        name="last name"
        type="text"
        label="last name"
      />
      <FormulateInput
        v-model="userInfo.email"
        name="email"
        type="email"
        label="email"
      />
      <FormulateInput
        v-model="userInfo.password"
        name="password"
        type="password"
        label="password"
      />
      <FormulateInput
        v-model="userInfo.location"
        name="location"
        type="text"
        label="location"
      />
      <FormulateInput type="submit" label="Update" @click="checkEmail" />
    </div>
  </main>
</template>

<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      oldEmail: '',
      userInfo: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        location: '',
      },
    };
  },
  computed: {
    access_token() {
      return sessionStorage.getItem('access_token');
    },
  },
  created() {
    this.$axios('users/me?fields=*,orders.ordered_items.products.*', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + this.access_token,
      },
    })
      .then((response) => {
        this.oldEmail = response.data.data.email;
        console.log(this.oldEmail);
        console.log(response);
        this.userInfo = response.data.data;
        this.userInfo.firstName = response.data.data.first_name;
        this.userInfo.lastName = response.data.data.last_name;
        this.userInfo.email = response.data.data.email;
        this.userInfo.password = response.data.data.password;
        this.userInfo.location = response.data.data.location;
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
}
</style>
