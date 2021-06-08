<template>
  <main>
    <section class="order">
      <OrderItems
        v-for="order in orderProductData"
        :key="order.id"
        class="p-storefront__product-list__item"
        :order="order"
      />
    </section>
  </main>
</template>

<script>
// fit= cover
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
      this.$axios('items/orders?fields=*,ordered_items.*.*,product_id.*', {
        method: 'GET',
        headers: {},
      })
        .then((data) => {
          this.orderProductData = data.data.data;
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
.order {
  margin: 6em;
}
</style>
