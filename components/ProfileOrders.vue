<template>
  <article class="c-profile-order">
    <div class="c-profile-order__content">
      <div class="c-profile-order__details">
        <p>Order nr: {{ order.id }}</p>
        <p>Status: {{ order.status }}</p>
        <p>{{ order.date_created }}</p>
        <p class="c-profile-order__details__item-a">
          Leveradres: {{ order.street_name }} {{ order.house_number }},
          {{ order.postal_code }} {{ order.city }}
        </p>

        <p v-if="order.tracking_code !== null">
          Trackingcode: {{ order.tracking_code }}
        </p>
        <p v-else>Trackingcode: TBD</p>
      </div>
      <table class="c-profile-order__items">
        <tr>
          <th>Beschrijving</th>
          <th>Aantal</th>
          <th>Stukprijs</th>
          <th>Bedrag EUR</th>
        </tr>
        <InvoiceProduct
          v-for="orderedItem in orderedItems"
          :key="orderedItem.id"
          :ordered-item="orderedItem"
        />
        <tr>
          <th>Totaal</th>
          <th></th>
          <th></th>
          <th>{{ order.total_price }}</th>
        </tr>
      </table>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ProfileOrders',
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      src: 'http://157.230.126.154/assets/',
    };
  },
  computed: {
    access_token() {
      return sessionStorage.getItem('access_token');
    },
    orderedItems() {
      console.log(this.order);
      return this.order.ordered_items;
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.c-profile-order__details {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  column-gap: $xs-site-padding;
  font-weight: 500;

  &__item-a {
    grid-column: 1 / span 2;
  }

  @include md() {
    grid-template-columns: 50% 50%;
  }
}

.c-profile-order__items {
  margin-top: $m-site-padding;
  width: 100%;
}
</style>
