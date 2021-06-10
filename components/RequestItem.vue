<template>
  <article class="c-request-item">
    <div class="c-request-item__content">
      <p>id: {{ request.id }}</p>
      <p>voornaam: {{ request.first_name }}</p>
      <p>achternaam: {{ request.last_name }}</p>
      <p>email: {{ request.email }}</p>
      <p>telefoon nummer: {{ request.telefoon_nummer }}</p>
      <p>tekst: {{ request.text_content }}</p>
    </div>
    <div>
      <button
        class="c-request-item__btn admin-btn"
        :class="{ done: request.done == true }"
        @click="$emit('done-request', request)"
      >
        V
      </button>
    </div>
  </article>
</template>

<script>
export default {
  name: 'RequestItem',
  props: {
    request: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      src: 'http://157.230.126.154/assets/',
      Admin: false,
    };
  },
  computed: {
    user_role() {
      return sessionStorage.getItem('user_role');
    },
    isAdmin() {
      return this.$store.getters['auth/isAdmin'];
    },
  },
};
</script>

<style lang="scss">
.c-request-item {
  display: flex;

  &__content {
    width: 100%;
  }
}

.done {
  background-color: green;
}
</style>
