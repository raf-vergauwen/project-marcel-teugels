<template>
  <main class="p-product-page"></main>
</template>

<script>
export default {
  name: 'ProductPage',
  data() {
    return {
      productData: null,
    };
  },
  fetch() {
    console.log(this.$route.params.id);
    return this.fetchProduct();
  },

  methods: {
    fetchProduct() {
      return fetch(
        'http://157.230.126.154/items/products/' + this.$route.params.id,
        {
          method: 'GET',
        },
      )
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
  },
};
</script>

<style lang="scss">
.p-product-page {
}
</style>
