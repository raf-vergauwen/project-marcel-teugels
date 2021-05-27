<template>
  <article class="c-order-product">
    <div class="c-order-product__image-container">
      <img
        :src="src + product.images[0].directus_files_id"
        alt=""
        class="c-order-product__image"
      />
    </div>
    <div class="c-order-product__content">
      <p>{{ product.name }}</p>
      <p>{{ product.id }}</p>
      <p>{{ product.description }}</p>
      <p>Quantity: {{ product.quantity_in_stock }}</p>
      <p>Price: € {{ product.price }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'OrderProducts',
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
.c-order-product {
  display: flex;
}
</style>
