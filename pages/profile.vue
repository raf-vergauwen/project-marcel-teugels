<template>
  <div class="container">
    <p v-if="userInfo">{{ userInfo.first_name }} {{ userInfo.last_name }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      userInfo: null,
    };
  },
  computed: {
    access_token() {
      return sessionStorage.getItem('access_token');
    },
  },
  created() {
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
        return response.blob();
      })
      .then((body) => {
        this.userInfo = body.data;
      })
      .catch((err) => {
        console.error(err);
        sessionStorage.removeItem('access_token');
        this.$router.push('/login');
      });
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
