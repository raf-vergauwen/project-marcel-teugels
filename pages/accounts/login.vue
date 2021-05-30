<template>
  <main>
    <restauration-header />
    <div class="container">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <label>
          E-mail:
          <input v-model="email" type="text" name="email" />
        </label>
        <label>
          Password:
          <input v-model="password" type="password" name="password" />
        </label>
        <button type="submit">Login</button>
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
.container {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
}

.title {
  display: block;
  color: #35495e;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
</style>
