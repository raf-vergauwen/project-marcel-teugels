<template>
  <article class="c-shopping-cart-item">
    <div class="c-shopping-cart-item__visual">
      <img :src="src + product.images[0].directus_files_id" alt="" />
    </div>
    <NuxtLink :to="`/product/${product.id}`">
      <h2 class="c-shopping-cart-item__title">
        {{ product.name }}
      </h2>
    </NuxtLink>
    <div class="c-shopping-cart-item__content">
      <p class="c-shopping-cart-item__content--name">{{ product.name }}</p>
      <p class="c-shopping-cart-item__content--id">{{ product.id }}</p>
      <p class="c-shopping-cart-item__content--description">
        {{ product.description }}
      </p>
      <p class="c-shopping-cart-item__content--quantity">
        Quantity: {{ product.quantity_in_stock }}
      </p>
      <p class="c-shopping-cart-item__content--price">
        Price: € {{ product.price }}
      </p>
    </div>
    <button
      class="c-shopping-cart-item__content--btn"
      @click="$emit('add-product', product)"
    >
      Buy
    </button>
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
.c-shopping-cart-item {
  background-color: var(--color-primary);

  &__visual {
    @include box-dimensions($height: 200px);
  }

  &__title {
    //...
  }

  &__content {
    //...
  }

  &__content--name {
    //...
  }

  &__content--id {
    //...
  }

  &__content--description {
    //...
  }

  &__content--quantity {
    //...
  }

  &__content--price {
    //...
  }

  &__content--btn {
    //...
  }
}
</style>
