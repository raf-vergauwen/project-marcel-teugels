<template>
  <article class="c-order-product">
    <div class="c-order-product__image-container"></div>
    <div class="c-order-product__content">
      <p><em>Name:</em> {{ productDetails.name }}</p>

      <p>hoeveelheid: {{ product.quantity }}</p>
      <p>totaal per product: € {{ product.total_price }}</p>
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
  computed: {
    productDetails() {
      return this.product.product_id;
    },
  },
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

  &__content {
    border: 1px solid green;
    width: 700px;
    margin: 1em;
  }
  /*
  &__image {
    min-width: 400px;
    min-height: auto;

    &-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      height: 400px;
      overflow: hidden;
    }
  }
  */
}
</style>
