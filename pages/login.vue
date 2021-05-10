<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label
        >E-mail:
        <input type="text" name="email" v-model="email" />
      </label>
      <label
        >Password:
        <input type="password" name="password" v-model="password" />
      </label>
      <button type="submit">Log in</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    loginBody() {
      return JSON.stringify({ email: this.email, password: this.password });
    },
    access_token() {
      return sessionStorage.getItem('access_token');
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
