<template>
  <article class="c-product-item">
    <div class="c-product-item__image">
      <img :src="src + product.images[0].directus_files_id" alt="" />
    </div>
    <NuxtLink :to="`/product/${product.id}`">
      <h2 class="c-product-item__title">
        {{ product.name }}
      </h2>
    </NuxtLink>
    <div class="c-product-item__content">
      <p>{{ product.name }}</p>
      <p>{{ product.id }}</p>
      <p>{{ product.description }}</p>
      <p>Quantity: {{ product.quantity_in_stock }}</p>
      <p>Price: € {{ product.price }}</p>
    </div>
    <button @click="addToShoppingCart">Buy</button>
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
  methods: {
    addToShoppingCart() {
      fetch('http://157.230.126.154/items/ordered_items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: this.productBody,
      })
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            throw new Error('Could not add product to shopping cart');
          }
          return response.json();
        })
        .then((body) => {
          console.log(body);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss">
.c-product-item {
  background-color: $bg-blue;
  padding: $s-site-padding;
}
</style>
