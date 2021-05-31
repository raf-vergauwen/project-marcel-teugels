<template>
  <article class="c-product-item">
    <div class="c-product-item__image">
      <img :src="src + product.images[0].directus_files_id" alt="" />
    </div>
    <div v-if="Admin === '78b6335f-b448-46d6-8086-65057ba5fae0'">
      <NuxtLink :to="`/shop/product/${product.id}`">
        <h2 class="c-product-item__title">
          {{ product.name }}
        </h2>
      </NuxtLink>
      <button class="c-product__btn" @click="$emit('remove-product', product)">
        x
      </button>
    </div>
    <div v-else>
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
      Admin: false,
    };
  },
  computed: {
    user_role() {
      return sessionStorage.getItem('user_role');
    },
  },
  created() {
    this.isAdmin();
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
    isAdmin() {
      this.Admin = this.user_role;
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
