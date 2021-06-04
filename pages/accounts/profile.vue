<template>
  <main>
    <restoration-header />
    <div class="container">
      <h1>Profile</h1>
      <label>
        First name:
        <input
          v-model="firstName"
          type="text"
          name="first-name"
          placeholder=""
        />
      </label>
      <p v-if="userInfo">{{ userInfo.first_name }} {{ userInfo.last_name }}</p>
      <p v-if="userInfo">{{ userInfo.email }}</p>
      <p v-if="userInfo">
        {{ userInfo.orders[0].ordered_items[0].products[0] }}
      </p>
    </div>
  </main>
</template>

<script>
import RestorationHeader from '~/components/RestorationHeader';

export default {
  name: 'ProfilePage',
  components: { RestorationHeader },
  data() {
    return {
      userInfo: null,
      firstName: 'Emiel',
    };
  },
  computed: {
    access_token() {
      return sessionStorage.getItem('access_token');
    },
  },
  created() {
    fetch(
      'http://157.230.126.154/users/me?fields=*,orders.ordered_items.products.*',
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + this.access_token,
        },
      },
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not get user info');
        }
        return response.json();
      })
      .then((body) => {
        console.log(body);
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

<style lang="scss" scoped>
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
