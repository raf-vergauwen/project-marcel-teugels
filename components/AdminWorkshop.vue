<template>
  <article class="c-admin-workshop-item-page">
    <div class="c-admin-workshop-item__content">
      <NuxtLink :to="`/admin/edit-workshop/${workshop.id}`">
        <h2 class="c-admin-workshop-item c-admin-product-item__title">
          {{ workshop.title }}
        </h2>
      </NuxtLink>
      <p class="c-admin-workshop-item">id: {{ workshop.id }}</p>
      <p class="c-admin-workshop-item">{{ workshop.date }}</p>
      <p class="c-admin-workshop-item">{{ workshop.status }}</p>
      <button
        class="c-admin-workshop__btn admin-btn"
        @click="$emit('remove-workshop', workshop)"
      >
        x
      </button>
    </div>
  </article>
</template>

<script>
export default {
  name: 'AdminWorkshop',
  layout: 'Admin',
  props: {
    workshop: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      src: 'http://157.230.126.154/assets/',
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

  methods: {},
};
</script>

<style lang="scss">
.c-admin-workshop-item {
  margin: 0;
  width: 200px;

  &-page {
    padding: $s-site-padding;
  }

  &__image {
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-radius: 30px;
    color: $light-bg;
    background-color: $dark-blue;
    padding: 1em;
  }

  &__title {
    color: $light-bg;
    font-size: 1em;
  }
}
</style>
