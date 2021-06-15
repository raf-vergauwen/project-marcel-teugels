<template>
  <main class="p-product-page">
    <section class="p-product-page__add">
      <FormulateForm
        v-model="productFormData"
        class="formulate-container"
        @submit="postWorkshop"
      >
        <FormulateInput
          name="name"
          type="text"
          label="product naam"
          validation-name="naam"
          validation="required"
        />
        <FormulateInput
          name="description"
          type="textarea"
          label="omschrijving"
          validation="required"
        />
        <FormulateInput
          name="price"
          type="number"
          label="prijs"
          validation="required"
        />
        <FormulateInput
          name="size"
          type="number"
          label="grootte"
          validation="required"
        />
        <FormulateInput
          name="weight"
          type="number"
          label="gewicht"
          validation="required"
        />
        <FormulateInput
          name="quantity_in_stock"
          type="number"
          label="hoeveelheid in stock"
          validation="required"
        />
        <FormulateInput
          type="image"
          name="images"
          label="Please select an image"
          validation="mime:image/jpeg,image/png"
          :uploader="uploader"
          multiple
        />
        <FormulateInput type="submit" label="add product" />
      </FormulateForm>
      <AdminProduct
        v-for="product in productData"
        :key="product.id"
        class="p-storefront__product-list__item"
        :product="product"
        @remove-product="removeProduct($event)"
      />
    </section>
  </main>
</template>

<script>
export default {
  name: 'AddProductPage',
  layout: 'admin',
  data() {
    return {
      productData: {},
      productFormData: {
        name: '',
        description: '',
        price: '',
        size: '',
        weight: '',
        quantity_in_stock: '',
        images: [],
      },
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
    postWorkshop(data) {
      return this.$axios('/items/products/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data,
      })
        .then((response) => {
          console.log(response);
          return response.data.data;
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
    removeProduct(product) {
      this.$axios(`/items/products/${product.id}`, {
        method: 'PATCH',
        data: {
          status: 'archived',
        },
      })
        .then(function (con) {
          this.fetchItems();
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
};
</script>

<style lang="scss">
.title__container {
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
}
</style>
