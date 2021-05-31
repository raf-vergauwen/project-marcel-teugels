<template>
  <main class="p-profile">
    <div class="p-profile__container">
      <h1>Profile</h1>
      <NuxtLink to="admin/add-workshop">Add Workshop</NuxtLink>
      <form @submit.prevent="checkEmail">
        <label
          >First name: <input v-model="userInfo.firstName" type="text" />
        </label>
        <label
          >Last name: <input v-model="userInfo.lastName" type="text" />
        </label>
        <label>Email: <input v-model="userInfo.email" type="email" /> </label>
        <label
          >Password: <input v-model="userInfo.password" type="password" />
        </label>
        <label
          >Location: <input v-model="userInfo.location" type="text" />
        </label>
        <button type="submit">Update</button>
      </form>
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
