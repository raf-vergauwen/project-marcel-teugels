<template>
  <main class="p-storefront">
    <div class="title-btn__container">
      <h1 class="p-product__title">Store</h1>

      <button v-if="isAdmin === true" class="p-product__btn admin-btn">
        <nuxt-link to="/admin/add-product">+</nuxt-link>
      </button>
    </div>

    <div class="p-storefront__product-list">
      <ProductItem
        v-for="product in productData"
        :key="product.id"
        class="p-storefront__product-list__item"
        :product="product"
        @remove-product="removeProduct($event)"
        @add-product="addProduct"
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
    isAdmin() {
      return this.$store.getters['auth/isAdmin'];
    },
  },
  mounted() {
    this.$store.commit('updateCartFromLocalStorage');
  },
  methods: {
    fetchItems() {
      this.$axios('items/products?fields=*,images.*', {
        method: 'GET',
        headers: {},
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
      this.$store.commit('addToCart', product);
    },

    removeProduct(product) {
      this.$axios(`/items/products/${product.id}`, {
        method: 'DELETE',
      })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
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
