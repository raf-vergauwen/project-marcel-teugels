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
          ontvangen
        </p>
        <span class="c-order-item__space"></span>
        <p
          class="c-order-item__status"
          :class="{ active: paymentConfirmation === true }"
        >
          ontvangen
        </p>
        <span class="c-order-item__space"></span>
        <div :class="{ sendBtn: readyToSend === false }">
          <button @click="sendOrder">
            <p class="c-order-item__status">verzend</p>
          </button>
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
        console.log(this.readyToSend);
      } else if (this.verzonden === true) {
        this.readyToSend = false;
      } else if (
        this.orderConfirmation === true ||
        this.paymentConfirmation === true
      ) {
        this.readyToSend = true;
        console.log(this.readyToSend);
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
  },
};
</script>

<style lang="scss">
.c-order-item {
  background-color: $light-blue;
  margin: 2em 0em;

  &__content {
    width: 100%;
  }

  &__space {
    border: 1px solid black;
    margin: 0em 1em;
    width: 30px;
  }

  &__status {
    margin: 0;

    &-container {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
    }
  }
}

.active {
  color: green;
}

.sendBtn {
  display: none !important;
}
</style>
