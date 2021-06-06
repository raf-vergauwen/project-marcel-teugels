<template>
  <section id="app">
    <OrderItems
      v-for="order in orderProductData"
      :key="order.id"
      class="p-storefront__product-list__item"
      :order="order"
    />
  </section>
</template>

<script>
export default {
  name: 'OrderPage',
  layout: 'admin',
  data() {
    return {
      orderProductData: {},

      allProductData: {},
    };
  },
  computed: {
    access_token() {
      return sessionStorage.getItem('access_token');
    },
  },
  created() {
    this.fetchOrder();
  },
  methods: {
    fetchOrder() {
      fetch(
        'http://157.230.126.154/items/ordered_items?fields=*,products.*.*',
        {
          method: 'GET',
        },
      )
        .then((response) => {
          if (!response.ok) {
            console.log('could not fetch ordered items');
          }

          return response.json();
        })
        .then((data) => {
          this.orderProductData = data.data;
          console.log(this.orderProductData);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style>
#app {
  margin: 6em;
}
</style>
