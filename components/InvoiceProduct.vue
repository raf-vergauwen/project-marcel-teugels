<template>
  <tr class="c-invoice-product__content">
    <td>{{ orderedItem.product_id.name }}</td>
    <td>{{ orderedItem.quantity }}</td>
    <td>{{ orderedItem.product_id.price }}</td>
    <td>{{ orderedItem.total_price }}</td>
  </tr>
</template>

<script>
export default {
  name: 'InvoiceProduct',
  props: {
    orderedItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss"></style>
