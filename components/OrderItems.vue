<template>
  <article class="c-order-item">
    <div class="c-order-item__content">
      <div class="c-order-item__status-container">
        <p class="c-order-item__status" :class="{ active: ontvangen === true }">
          ontvangen
        </p>
        <span class="c-order-item__space"></span>
        <p
          class="c-order-item__status"
          :class="{ active: orderConfirmation === true }"
        >
          goedkeuring bestelling
        </p>
        <span class="c-order-item__space"></span>
        <p
          class="c-order-item__status"
          :class="{ active: paymentConfirmation === true }"
        >
          goedkeuring prijs
        </p>
        <span class="c-order-item__space"></span>
        <div class="send-btn" :class="{ hide: readyToSend === false }">
          <span class="c-order-item__space"></span>
        </div>

        <p class="c-order-item__status" :class="{ active: verzonden === true }">
          verzonden
        </p>
      </div>
      <p>{{ order.id }}</p>
      <p>{{ order.address }}</p>
      <p>{{ order.first_name }} {{ order.last_name }}</p>
      <p>{{ order.date_created }}</p>

      <p>{{ order.total_price }}</p>
      <p>{{ order.notes }}</p>
      <div
        v-if="order.shipping_price === null && orderConfirmation === true"
        :class="{ hide: orderConfirmation === false }"
      >
        <FormulateForm
          v-model="shipmentData"
          class="c-order-item__shipment-container"
          @submit="addShipment"
        >
          <FormulateInput
            name="shipment_price"
            type="text"
            label="verzendkosten"
            validation-name="naam"
            validation="required"
          />
          <FormulateInput type="submit" label="toevoegen" />
        </FormulateForm>
      </div>
      <div v-else>
        <p>verzendkost: {{ order.shipping_price }}</p>
      </div>
      <div :class="{ hide: readyToSend === false }">
        <FormulateForm
          v-if="order.tracking_code === null"
          v-model="shipmentData"
          class="c-order-item__shipment-container"
          @submit="addTracking"
        >
          <FormulateInput
            name="tracking_code"
            type="text"
            label="tracking code"
            validation-name="naam"
            validation="required"
          />
          <FormulateInput type="submit" label="toevoegen" />
        </FormulateForm>
        <div v-else>
          <p>tracking code: {{ order.tracking_code }}</p>
        </div>
      </div>

      <OrderProducts
        v-for="product in order.ordered_items"
        :key="product.id"
        class="c-order-item__product"
        :product="product"
      />
    </div>
  </article>
</template>

<script>
export default {
  name: 'OrderItem',
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      ontvangen: null,
      orderConfirmation: this.order.order_confirmation,
      paymentConfirmation: this.order.payment_confirmation,
      readyToSend: false,
      verzonden: null,
      shipmentData: {
        shipment_price: '',
        tracking_code: '',
      },
      src: 'http://157.230.126.154/assets/',
    };
  },
  computed: {
    access_token() {
      return sessionStorage.getItem('access_token');
    },
  },
  created() {
    this.lookStatus();
    this.lookOrder();
  },
  methods: {
    lookStatus() {
      if (this.order.status === 'ontvangen') {
        this.ontvangen = true;
      } else if (this.order.status === 'verzonden') {
        this.ontvangen = true;
        this.verzonden = true;
      }
    },
    lookOrder() {
      if (
        this.orderConfirmation === false ||
        this.paymentConfirmation === false
      ) {
        this.readyToSend = false;
      } else if (this.verzonden === true) {
        this.readyToSend = false;
      } else if (
        this.orderConfirmation === true ||
        this.paymentConfirmation === true
      ) {
        this.readyToSend = true;
      } else {
        console.log('fail');
      }
    },
    sendOrder() {
      this.$axios(`items/orders/${this.order.id}`, {
        method: 'PATCH',
        headers: {
          Authorization: 'Bearer ' + this.access_token,
        },
        data: {
          status: 'verzonden',
        },
      })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    addShipment() {
      this.$axios(`items/orders/${this.order.id}`, {
        method: 'PATCH',
        headers: {
          Authorization: 'Bearer ' + this.access_token,
        },
        data: {
          shipping_price: this.shipmentData.shipment_price,
        },
      })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    addTracking() {
      this.$axios(`items/orders/${this.order.id}`, {
        method: 'PATCH',
        headers: {
          Authorization: 'Bearer ' + this.access_token,
        },
        data: {
          tracking_code: this.shipmentData.tracking_code,
          status: 'verzonden',
        },
      })
        .then((data) => {
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
.c-order-item {
  background-color: $light-blue;
  margin: 2em 0;

  &__content {
    width: 100%;
  }

  &__space {
    border: 1px solid black;
    margin: 0 1em;
    width: 30px;
    height: 0;
  }

  &__shipment {
    &-container {
      width: 250px;
    }
  }

  &__status {
    margin: 0;
    font-size: 1.3em;

    &-container {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      padding: 2em 0;
    }
  }
}

.active {
  color: green;
}

.send-btn {
  display: flex;
  align-items: center;
}

.hide {
  display: none !important;
}
</style>
