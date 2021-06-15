<template>
  <article class="c-admin-product-item-page">
    <div class="c-admin-product-item__content">
      <NuxtLink :to="`/admin/edit-product/${product.id}`">
        <h2 class="c-admin-product-item c-admin-product-item__title">
          {{ product.name }}
        </h2>
      </NuxtLink>
      <p class="c-admin-product-item">id: {{ product.id }}</p>
      <p class="c-admin-product-item">Price: € {{ product.price }}</p>
      <p class="c-admin-product-item">
        {{ product.status }}
      </p>
      <button
        class="c-admin-product__btn admin-btn"
        @click="$emit('remove-product', product)"
      >
        x
      </button>
    </div>
  </article>
</template>

<script>
export default {
  name: 'AdminProduct',

  props: {
    product: {
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
.c-admin-product-item {
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
