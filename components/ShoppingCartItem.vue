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
      <NuxtLink :to="`/shop/product/${product.id}`">
        <h2 class="c-shopping-cart-item__title">
          {{ product.name }}
        </h2>
      </NuxtLink>
      <div class="c-shopping-cart-item__content">
        <p>{{ product.description }}</p>
        <p>Price: € {{ product.price }}</p>
        <p>Quantity: {{ product_quantity }}</p>
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
  computed: {
    product_quantity() {
      return this.$store.getters.productQuantity(this.product);
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.c-shopping-cart-item {
  display: flex;
  flex-direction: row;
  background-color: $light-blue;
  border-radius: 15px;
  box-shadow: 0 3px 19.7px rgb(0 0 0 / 1%), 0 5.5px 26.4px rgb(0 0 0 / 2%),
    0 8.2px 30.6px rgb(0 0 0 / 3%), 0 11.8px 35.6px rgb(0 0 0 / 4%),
    0 17.2px 45.4px rgb(0 0 0 / 4%), 0 27px 80px rgb(0 0 0 / 6%);

  &__image {
    width: 400px;
    margin-right: 1em;
    border-radius: 15px 0px 0px 15px;
  }

  &__title {
    color: $dark-bg;
    margin-top: 0.5em;
  }
}
</style>
