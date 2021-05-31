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
      return { email: this.email, password: this.password };
    },
    isLoggedIn() {
      return this.$store.getters['auth/isLoggedIn'];
    },
  },
  watch: {
    isLoggedIn(newVal) {
      if (newVal) {
        this.$router.push('/profile');
      }
    },
  },
  methods: {
    login() {
      this.$store.dispatch('auth/login', this.loginBody);
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
