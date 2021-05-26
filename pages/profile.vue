<template>
  <main>
    <restauration-header />
    <div class="container">
      <h1>Profile</h1>
      <form @submit.prevent="updateAccount">
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
import RestaurationHeader from '~/components/RestaurationHeader';

export default {
  name: 'ProfilePage',
  components: { RestaurationHeader },
  data() {
    return {
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
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
