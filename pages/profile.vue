<template>
  <main class="p-profile">
    <div class="p-profile__container">
      <h1>Profile</h1>
      <label
        >First name:
        <input
          v-model="firstName"
          type="text"
          name="first-name"
          placeholder=""
        />
      </label>
      <p v-if="userInfo">{{ userInfo.first_name }} {{ userInfo.last_name }}</p>
      <p v-if="userInfo">{{ userInfo.email }}</p>
      <p v-if="userInfo"></p>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ProfilePage',
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
    this.$axios('users/me?fields=*,orders.ordered_items.products.*', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + this.access_token,
      },
    })
      .then((response) => {
        console.log(response);
        this.userInfo = response.data.data;
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<style lang="scss">
.p-profile {
  &__container {
    @extend .container;
  }
}
</style>
