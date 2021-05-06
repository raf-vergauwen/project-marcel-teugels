<template>
  <div class="container">
    <form action="account-creation">
      <label
        >First name:
        <input type="text" name="first-name" v-model="firstName" />
      </label>
      <label
        >Last name:
        <input type="text" name="last-name" v-model="lastName" />
      </label>
      <label
        >E-mail:
        <input type="text" name="email" v-model="email" />
      </label>
      <label
        >Password:
        <input type="password" name="password" v-model="password" />
      </label>
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
  },
  computed: {
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
        body:
          '{"first_name":"","last_name":"","email":"","password":"","role":"d4625a28-4f5a-4aaa-970c-f7bf23adceb7"}',
      })
        .then((response) => {
          console.log(response);
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
