<template>
  <article class="c-shopping-cart-item">
    <div class="c-shopping-cart-item__image">
      <img :src="src + product.images[0].directus_files_id" alt="" />
    </div>
    <NuxtLink :to="`/product/${product.id}`">
      <h2 class="c-shopping-cart-item__title">
        {{ product.name }}
      </h2>
    </NuxtLink>
    <div class="c-shopping-cart-item__content">
      <p>{{ product.name }}</p>
      <p>{{ product.id }}</p>
      <p>{{ product.description }}</p>
      <p>Price: € {{ product.price }}</p>
    </div>
    <button @click="$emit('remove-product', product)">Remove</button>
  </article>
</template>

<script>
export default {
  name: 'ProductItem',
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
.c-product-item {
  padding: $s-site-padding;
  background-color: $dark-blue;
}

@include shopping-cart-item;
</style>
