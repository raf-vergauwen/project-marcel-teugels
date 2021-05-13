<template>
  <main class="p-storefront">
    <h1 class="p-storefront__title">Store</h1>
    <div class="p-storefront__product-list">
      <ProductItem
        v-for="product in productData"
        :key="product.id"
        class="p-storefront__product-list__item"
        :product="product"
        v-on:add-product="addProduct($event)"
      />
    </div>
  </main>
</template>

<script>
import ProductItem from '~/components/ProductItem';

export default {
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
  },
  methods: {
    fetchItems() {
      return fetch('http://157.230.126.154/items/products?fields=*.*', {
        method: 'GET',
        headers: {},
      })
        .then((response) => {
          if (!response.ok) {
            console.log('Error');
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.productData = data.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    addProduct(product){
      this.shoppingCart.push(product);
      console.log(this.shoppingCart);
    }
  },
};
</script>

<style lang="scss">
.p-storefront {
  @extend .container;

  &__title {
  }

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

    &__item {
    }
  }
}
</style>
