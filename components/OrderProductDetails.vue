<template>
  <article class="c-order-product_details">
    <div class="c-order-product-details__content"></div>
  </article>
</template>

<script>
export default {
  name: 'DetailItem',
  props: {
    details: {
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
.c-order-product-details {
  background-color: $light-blue;
  margin: 2em 0em;

  &__content {
    width: 600px;
  }
}
</style>
