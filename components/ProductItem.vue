<template>
  <article class="c-product-item">
    <div class="c-product-item__image">
      <img :src="src + product.images[0].directus_files_id" alt="" />
    </div>
    <div>
      <NuxtLink :to="`/shop/product/${product.id}`">
        <h2 class="c-product-item__title">
          {{ product.name }}
        </h2>
      </NuxtLink>
    </div>

    <div class="c-product-item__content">
      <p>{{ product.name }}</p>
      <p>{{ product.id }}</p>
      <p>{{ product.description }}</p>
      <p>Quantity: {{ product.quantity_in_stock }}</p>
      <p>Price: € {{ product.price }}</p>
    </div>
    <div class="c-product-item__quantity">
      <button :disabled="isEmpty" @click="$emit('remove-product', product)">
        -
      </button>
      {{ product_quantity }}
      <button :disabled="isDisabled" @click="addProduct">+</button>
    </div>
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
      isDisabled: false,
      isEmpty: false,
    };
  },

  computed: {
    isAdmin() {
      return this.$store.getters['auth/isAdmin'];
    },
    product_quantity() {
      return this.$store.getters.productQuantity(this.product);
    },
  },
  watch: {
    product_quantity() {
      this.lookQuantity();
    },
  },
  created() {
    this.lookQuantity();
  },

  methods: {
    addProduct() {
      this.$root.$emit('g-add-product', this.product);
      this.$root.$emit(
        'notify',
        `${this.product.name} has been added to your shopping basket`,
      );
      this.$emit('add-product', this.product);
    },
    lookQuantity() {
      if (this.product.quantity_in_stock <= this.product_quantity) {
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }

      if (this.product_quantity === null) {
        this.isEmpty = true;
      } else {
        this.isEmpty = false;
      }
    },
  },
};
</script>

<style lang="scss">
.c-product-item {
  background-color: $dark-blue;
  padding: $s-site-padding;

  &__image {
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
}
</style>
