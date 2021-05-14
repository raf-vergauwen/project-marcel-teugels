<template>
  <main class="p-product-page">
    <restauration-header />
    <div class="title__container">
      <h1>Under Construction</h1>
      <h2>{{ workshopData.title }}</h2>
    </div>
  </main>
</template>

<script>
import RestaurationHeader from '~/components/RestaurationHeader';

export default {
  name: 'WorkshopPage',

  components: { RestaurationHeader },
  data() {
    return {
      workshopData: null,
    };
  },
  created() {
    this.fetchProduct();
  },
  fetch() {
    console.log(this.$route.params.id);
    return this.fetchProduct();
  },

  methods: {
    fetchProduct() {
      return fetch(
        'http://157.230.126.154/items/workshops/' + this.$route.params.id,
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
          this.workshopData = data.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss">
.title__container {
  display: flex;
  height: 90vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
}
</style>
