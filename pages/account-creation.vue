<template>
  <main class="p-account-creation">
    <h1>Registreer</h1>
    <FormulateForm
      v-model="accountInfo"
      class="p-account-creation__form"
      @submit="createAccount"
    >
      <FormulateInput
        name="first_name"
        type="text"
        label="Voornaam"
        validation-name="voornaam"
        validation="required"
      />
      <FormulateInput
        name="last_name"
        type="text"
        label="Achternaam"
        validation-name="achternaam"
        validation="required"
      />
      <FormulateInput
        name="email"
        type="email"
        label="email"
        validation-name="email"
        validation="required|email"
      />
      <FormulateInput
        name="password"
        type="password"
        label="Wachtwoord"
        validation-name="wachtwoord"
        validation="required"
      />
      <FormulateInput
        name="password_confirm"
        type="password"
        label="Wachtwoord herhalen"
        validation="required|confirm"
        validation-name="wachtwoorden"
      />
      <FormulateInput type="submit" label="Account aanmaken" />
    </FormulateForm>
  </main>
</template>

<script>
export default {
  name: 'AccountCreationPage',
  data() {
    return {
      accountInfo: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        role: 'd4625a28-4f5a-4aaa-970c-f7bf23adceb7',
      },
    };
  },
  computed: {
    accountBody() {
      return JSON.stringify({
        first_name: this.accountInfo.first_name,
        last_name: this.accountInfo.last_name,
        email: this.accountInfo.email,
        password: this.accountInfo.password,
        role: this.accountInfo.role,
      });
    },
    access_token() {
      return sessionStorage.getItem('access_token');
    },
  },
  methods: {
    createAccount() {
      this.$axios('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: this.accountBody,
      })
        .then((response) => {
          this.$root.$emit(
            'notify',
            `Registratie geslaagd, welkom ${this.accountInfo.first_name}!`,
          );
          return response.data.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss">
.p-account-creation {
  @extend .container;

  padding-top: $m-site-padding;
  padding-bottom: $m-site-padding;

  min-height: 80vh;
}
</style>
