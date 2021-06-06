<template>
  <article class="c-home-item">
    <div class="c-home-item__image">
      <img :src="src + product.images[0].directus_files_id" alt="" />
    </div>
    <NuxtLink :to="`/shop/product/${product.id}`">
      <h2 class="c-home-item__title">
        {{ product.name }}
      </h2>
    </NuxtLink>

    <div class="c-home-item__content">
      <p>{{ product.price }} EUR</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'HomeItem',
  props: {
    product: {
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
  },
  methods: {
    addProduct() {
      this.$root.$emit(
        'notify',
        `${this.product.name} has been added to your shopping basket`,
      );
    },
  },
};
</script>

<style lang="scss">
.c-home-item {
  background-color: $dark-blue;
  padding: $s-site-padding;
  color: $light-bg;

  &__title {
    font-size: 1rem;
    font-weight: 400;
  }

  &__image {
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
}
</style>
