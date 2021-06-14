<template>
  <main>
    <div class="container">
      <h1>Account creation</h1>
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
        <FormulateInput type="submit" label="Registreer" />
      </FormulateForm>
    </div>
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
          console.log(response);
          return response.data.data;
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

form {
  display: flex;
  flex-direction: column;
  text-align: left;
}

label {
  padding: 1em;
}
</style>
