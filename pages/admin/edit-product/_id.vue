<template>
  <main class="p-product-page">
    <div class="p-product__container">
      <div class="p-product__info">
        <FormulateForm
          v-if="productLoaded"
          v-model="newProductData"
          class="formulate-container"
          @submit="editProduct"
        >
          <FormulateInput
            name="name"
            type="text"
            label="product naam"
            validation="required"
          />
          <FormulateInput
            name="price"
            type="number"
            label="prijs"
            validation="required"
          />
          <FormulateInput
            name="weight"
            type="text"
            label="gewicht"
            validation="required"
          />
          <FormulateInput
            name="size"
            type="text"
            label="grootte"
            validation="required"
          />
          <FormulateInput
            name="quantity"
            type="text"
            label="hoeveelheid"
            validation="required"
          />
          <FormulateInput
            name="description"
            type="textarea"
            label="omschrijving"
            validation="required"
          />
          <FormulateInput
            type="image"
            name="images"
            label="Please select an image"
            validation="required"
            :uploader="uploader"
            multiple
          />
          <FormulateInput type="submit" label="edit" />
        </FormulateForm>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ProductPage',
  layout: 'admin',
  data() {
    return {
      productLoaded: false,
      src: 'http://157.230.126.154/assets/',
      Admin: false,
      productData: null,
      newProductData: {
        name: '',
        status: 'draft',
        price: '',
        weight: '',
        size: '',
        quantity: '',
        description: '',
        images: [],
      },
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
    vueFormulateImages() {
      return this.productData.images.map((image) => {
        return {
          url: `http://157.230.126.154/assets/${image.directus_files_id}`,
        };
      });
    },
    fetchProduct() {
      this.$axios(`items/products/${this.$route.params.id}`, {
        method: 'GET',
        headers: {},
        params: {
          fields: '*.*',
        },
      })
        .then((data) => {
          console.log(data);
          this.productData = data.data.data;
          this.newProductData.name = this.productData.name;
          this.newProductData.price = this.productData.price;
          this.newProductData.weight = this.productData.weight;
          this.newProductData.size = this.productData.size;
          this.newProductData.quantity = this.productData.quantity_in_stock;
          this.newProductData.description = this.productData.description;
          this.newProductData.status = this.productData.status;
          this.newProductData.images = this.vueFormulateImages();
          this.productLoaded = true;
        })
        .catch((err) => {
          console.error(err);
        });
    },

    uploader(file, progress, error) {
      const formData = new FormData();
      formData.append('file', file);

      return this.$axios('/files', {
        method: 'POST',
        data: formData,
      })
        .then((response) => {
          console.log(response);

          progress(100);

          return {
            directus_files_id: response.data.data.id,
          };
        })
        .catch((e) => {
          console.error(e);
          error('Kan afbeelding niet uploaden, probeer het opnieuw');
        });
    },
    editProduct(data) {
      this.$axios(`items/products/${this.productData.id}`, {
        method: 'PATCH',
        headers: {},
        data,
      })
        .then((response) => {
          console.log(response);
          console.log(this.productData.id);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss"></style>
