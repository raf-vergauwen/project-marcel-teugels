<template>
  <main class="p-login">
    <div class="p-login__container">
      <h1>Login</h1>
      <div class="p-login__content">
        <FormulateForm class="p-login__form" @submit="login">
          <FormulateInput
            v-model="email"
            name="email"
            type="email"
            label="email"
            validation-name="email"
            validation="required|email"
          />
          <FormulateInput
            v-model="password"
            name="password"
            type="password"
            label="Wachtwoord"
            validation-name="wachtwoord"
            validation="required"
          />
          <FormulateInput type="submit" label="Inloggen" />
        </FormulateForm>
        <div class="p-login__create-account">
          <div class="p-login__create-account__background">
            <h6>Heeft u nog geen account?</h6>
            <NuxtLink
              :to="'/account-creation'"
              class="p-login__create-account__link"
              >Registreer</NuxtLink
            >
          </div>
        </div>
      </div>
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
  padding-top: $m-site-padding;
  padding-bottom: $m-site-padding;
}

.p-login__form {
  width: 50%;

  @include md() {
    width: 100%;
  }
}

.p-login__content {
  display: flex;
  flex-direction: row;

  @include md() {
    flex-direction: column;
  }
}

.p-login__create-account {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__background {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em;
  }

  &__link {
    color: $dark-bg;
    font-weight: 500;
  }

  @include md() {
    width: 100%;
  }
}
</style>
