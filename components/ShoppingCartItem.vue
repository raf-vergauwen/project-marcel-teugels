<template>
  <article class="c-shopping-cart-item">
    <div class="c-shopping-cart-item__image-container">
      <img
        class="c-shopping-cart-item__image"
        :src="src + product.images[0].directus_files_id"
        alt=""
      />
    </div>
    <div class="c-shopping-cart-item__text">
      <NuxtLink :to="`/product/${product.id}`">
        <h2 class="c-shopping-cart-item__title">
          {{ product.name }}
        </h2>
      </NuxtLink>
      <div class="c-shopping-cart-item__content">
        <p>{{ product.id }}</p>
        <p>{{ product.name }}</p>
        <p>{{ product.description }}</p>
        <p>Price: € {{ product.price }}</p>
      </div>
      <button @click="$emit('remove-product', product)">Remove</button>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ShoppingCartItem',
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
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
.c-shopping-cart-item {
  display: flex;
  flex-direction: row;
  background-color: $light-blue;
  padding: $s-site-padding;
}

.c-shopping-cart-item__image {
  width: 400px;
  margin-right: 1em;
}

.c-shopping-cart-item__title {
  color: $dark-bg;
}
</style>
