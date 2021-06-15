<template>
  <main>
    <section>
      <div class="p-order">
        <OrderItems
          v-for="order in orderProductData"
          :key="order.id"
          class="p-order__item"
          :order="order"
        />
      </div>
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
      loading: false,
      page: 0,

      orderProductData: {},
      orderProductLength: 0,
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
      this.$axios('items/orders', {
        method: 'GET',
        headers: {},
        params: {
          fields: ['*,ordered_items.*', '*,ordered_items.product_id.*'],
          sort: '-date_updated',
          filter: {
            status: { _neq: 'verzonden' },
            order_confirmation: { _eq: true },
          },
        },
      })
        .then((data) => {
          this.orderProductData = data.data.data;
          this.orderProductLength = this.orderProductData.length;
          console.log(data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss">
.p-order {
  margin: 6em;
  min-height: 80vh;
}
</style>
