<template>
  <main>
    <restauration-header />
    <div class="container">
      <h1>Account creation</h1>
      <form action="account-creation" @submit.prevent="createAccount">
        <label>
          First name:
          <input v-model="firstName" type="text" name="first-name" />
        </label>
        <label>
          Last name:
          <input v-model="lastName" type="text" name="last-name" />
        </label>
        <label>
          E-mail:
          <input v-model="email" type="text" name="email" />
        </label>
        <label>
          Password:
          <input v-model="password" type="password" name="password" />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  </main>
</template>

<script>
import RestaurationHeader from '~/components/RestaurationHeader';

export default {
  components: { RestaurationHeader },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: 'd4625a28-4f5a-4aaa-970c-f7bf23adceb7',
    };
  },
  computed: {
    accountBody() {
      return JSON.stringify({
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
        role: this.role,
      });
    },
    access_token() {
      return sessionStorage.getItem('access_token');
    },
  },
  methods: {
    createAccount() {
      fetch('http://157.230.126.154/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: this.accountBody,
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
          // sessionStorage.setItem('access_token', body.data.access_token);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
}

.title {
  display: block;
  color: #35495e;
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 100px;
  font-weight: 300;
  letter-spacing: 1px;
}

.subtitle {
  padding-bottom: 15px;
  color: #526488;
  font-size: 42px;
  font-weight: 300;
  word-spacing: 5px;
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
