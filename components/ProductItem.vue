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
    <button @click="addProduct">Buy</button>
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
  methods: {
    addProduct(product) {
      this.$root.$emit('g-add-product', product);
      this.$root.$emit(
        'notify',
        `${this.product.name} has been added to your shopping basket`,
      );
      this.$emit('add-product', product);
    },
  },
};
</script>

<style lang="scss">
.c-product-item {
  background-color: $dark-blue;
  padding: $s-site-padding;
}
</style>
