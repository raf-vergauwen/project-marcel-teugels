<template>
  <article class="c-order-item">
    <div class="c-order-item__content">
      <p>{{ order.id }}</p>
      <OrderProducts
        v-for="product in order.products"
        :key="product.id"
        class="c-order-item__product"
        :product="product"
      />
    </div>
  </article>
</template>

<script>
export default {
  name: 'OrderItem',
  props: {
    order: {
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
.c-order-item {
  background-color: $light-blue;
  margin: 2em 0em;

  &__content {
    width: 600px;
  }
}
</style>
