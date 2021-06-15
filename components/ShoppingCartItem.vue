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
      <button
        class="c-shopping-cart-item__btn"
        @click="$emit('remove-product', product)"
      >
        Remove
      </button>
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
  box-shadow: 0 5px 1.7px rgb(0 0 0 / 1%), 0 5.5px 2.4px rgb(0 0 0 / 2%),
    0 8.2px 3.6px rgb(0 0 0 / 3%), 0 1.8px 3.6px rgb(0 0 0 / 4%),
    0 1.2px 4.4px rgb(0 0 0 / 4%), 0 7px 8px rgb(0 0 0 / 6%);

  @include md() {
    flex-direction: column;
  }

  &__text {
    padding: 1em;
  }
  &__image {
    width: 400px;
    height: 100%;
    margin-right: 1em;
    border-radius: 15px 0px 0px 15px;

    @include md() {
      width: 100%;
      height: auto;
      margin: 0;
      border-radius: 0px;
    }
    &-container {
      @include md() {
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        border-radius: 15px 15px 0px 0px;
      }
    }
  }

  &__title {
    color: $dark-bg;
    margin-top: 0.5em;
  }

  &__btn {
    border: 0px;
    border-radius: 3px;
    padding: 0.5 em1em;
  }
}
</style>
