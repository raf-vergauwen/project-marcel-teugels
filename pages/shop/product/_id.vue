<template>
  <main class="p-product-page">
    <div class="p-product__container">
      <img class="p-product__image" :src="src + images" alt="" />
      <div class="p-product__info-container">
        <div class="p-product__info">
          <h1>{{ name }}</h1>
          <h3>{{ price }}</h3>
          <p>{{ weight }}</p>
          <p>{{ size }}</p>
          <p>{{ quantity }}</p>
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ProductPage',
  data() {
    return {
      src: 'http://157.230.126.154/assets/',
      Admin: false,
      productData: null,
      name: '',
      status: 'draft',
      price: '',
      weight: '',
      size: '',
      quantity: '',
      description: '',
      images: '',
    };
  },
  fetch() {
    console.log(this.$route.params.id);
    return this.fetchProduct();
  },
  computed: {
    user_role() {
      return sessionStorage.getItem('user_role');
    },
    access_token() {
      return sessionStorage.getItem('access_token');
    },
  },
  methods: {
    fetchProduct() {
      this.$axios('items/products/' + this.$route.params.id, {
        method: 'GET',
        headers: {},
        params: {
          fields: '*.*',
        },
      })
        .then((data) => {
          console.log(data);
          this.productData = data.data.data;
          this.Admin = this.user_role;
          this.name = this.productData.name;
          this.price = this.productData.price;
          this.weight = this.productData.weight;
          this.size = this.productData.size;
          this.quantity = this.productData.quantity_in_stock;
          this.description = this.productData.description;
          this.status = this.productData.status;
          this.images = this.productData.images[0].directus_files_id;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss">
.p-product {
  &__image {
    width: 400px;
  }

  &__container {
    display: flex;
  }
}
</style>
