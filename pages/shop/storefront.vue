<template>
  <main class="p-storefront">
    <h1 class="p-product__title">Store</h1>

    <div class="p-storefront__product-list">
      <ProductItem
        v-for="product in productData"
        :key="product.id"
        class="p-storefront__product-list__item"
        :product="product"
        @add-product="addProduct"
        @remove-product="removeProduct($event)"
      />
    </div>
  </main>
</template>

<script>
import ProductItem from '~/components/ProductItem';

export default {
  name: 'StoreFrontPage',
  components: { ProductItem },
  data() {
    return {
      productData: {},
      src: 'http://157.230.126.154/assets/',
      shoppingCart: [],
    };
  },
  fetch() {
    return this.fetchItems();
  },
  computed: {
    access_token() {
      return sessionStorage.getItem('access_token');
    },
    user_role() {
      return sessionStorage.getItem('user_role');
    },
    isLoggedIn() {
      return this.$store.getters['auth/isLoggedIn'];
    },
  },
  created() {
    this.$store.dispatch('updateCartFromLocalStorage');
  },
  methods: {
    fetchItems() {
      this.$axios('items/products', {
        method: 'GET',
        headers: {},
        params: {
          fields: '*,images.*',
          filter: { status: { _neq: 'archived' } },
        },
      })
        .then((response) => {
          console.log(response);
          this.productData = response.data.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    addProduct(product) {
      console.log(product);
      this.$store.dispatch('addToCart', product);
    },
    removeProduct(product) {
      const index = this.shoppingList.indexOf(product);

      if (this.$store.getters.productQuantity(product) === 1) {
        this.shoppingList.splice(index, index + 1);
      }
      this.$store.dispatch('removeFromCart', product);

      this.$root.$emit(
        'notify',
        `${product.name} has been removed from your shopping basket`,
      );
      // this.shoppingList = this.$store.state.shoppingCart;
    },
  },
};
</script>

<style lang="scss">
.p-storefront {
  @extend .container;

  &__product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: $s-site-padding;

    @include md() {
      grid-template-columns: repeat(2, 1fr);
    }

    @include sm() {
      grid-template-columns: 1fr;
    }
  }
}

.p-storefront__product-list__item {
  color: white;
}

.title-btn__container {
  display: flex;
  justify-content: space-between;
  margin: 2em;
}

.p-product__title {
  color: $dark-bg;
}

a {
  font-size: 20px;
}
</style>
