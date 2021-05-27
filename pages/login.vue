<template>
  <main class="p-login">
    <div class="p-login__container">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <label
          >E-mail:
          <input v-model="email" type="text" name="email" />
        </label>
        <label
          >Password:
          <input v-model="password" type="password" name="password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      admin: '',
    };
  },
  computed: {
    loginBody() {
      return JSON.stringify({ email: this.email, password: this.password });
    },
    access_token() {
      return sessionStorage.getItem('access_token');
    },
    user_role() {
      return sessionStorage.getItem('user_role');
    },
  },
  methods: {
    login() {
      fetch('http://157.230.126.154/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: this.loginBody,
      })
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            throw new Error('Could not login');
          }
          return response.json();
        })
        .then((body) => {
          console.log(body);
          sessionStorage.setItem('access_token', body.data.access_token);
          this.$router.push('/profile');
        })
        .catch((err) => {
          console.error(err);
        });

      fetch('http://157.230.126.154/users/me', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + this.access_token,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Could not get user info');
          }
          return response.json();
        })
        .then((body) => {
          console.log(body);
          this.admin = body.data.role;
          sessionStorage.setItem('user_role', this.admin);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss">
.p-login {
  &__container {
    @extend .container;
  }
}
</style>
