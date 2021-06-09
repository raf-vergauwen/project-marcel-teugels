<template>
  <main class="c-login">
    <div class="c-login__container">
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
  name: 'LoginComponent',
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
        this.$router.push('/shop/place-order');
      }
    },
  },
  methods: {
    login() {
      this.$store.dispatch('auth/login', this.loginBody);
      this.$emit('removeLogin');
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
