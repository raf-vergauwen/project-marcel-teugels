<template>
  <article class="c-product-item">
    <div class="c-product-item__main-container">
      <div class="c-product-item__visual-container c-pi-v">
        <img
          class="c-pi-v__visual"
          :src="src + product.images[0].directus_files_id"
          alt="product item image"
        />
      </div>
      <NuxtLink
        class="c-product-item__title-container c-pi-t"
        :to="`/product/${product.id}`"
      >
        <h2 class="c-pi-t__title">
          {{ product.name }}
        </h2>
      </NuxtLink>
      <div class="c-product-item__content-container c-pi-c">
        <p class="c-pi-c__name">{{ product.name }}</p>
        <p class="c-pi-c__id">{{ product.id }}</p>
        <p class="c-pi-c__description">
          {{ product.description }}
        </p>
        <p class="c-pi-c__quantity">
          Quantity: {{ product.quantity_in_stock }}
        </p>
        <p class="c-pi-c__price">Price: € {{ product.price }}</p>
      </div>
      <div class="c-product-item__btn-container c-pi-b">
        <button class="c-pi-b__btn" @click="$emit('add-product', product)">
          Buy
        </button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      src: 'http://157.230.126.154/assets/',
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
.c-product-item {
  background-color: var(--color-primary);

  &__main-container {
    display: grid;
    gap: 8px 8px;
    grid-template-areas:
      'c-pi-v'
      'c-pi-t'
      'c-pi-c'
      'c-pi-b';
    grid-template-columns: 1fr;
    grid-template-rows: 5fr 1fr 3fr 1fr;
  }

  &__visual-container {
    display: grid;
    gap: 0 0;
    grid-area: c-pi-v;
    grid-template-areas: 'c-pi-v__visual';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    .c-pi-v__visual {
      grid-area: c-pi-v__visual;
    }
  }

  &__title-container {
    display: grid;
    gap: 0 0;
    grid-area: c-pi-t;
    grid-template-areas: 'c-pi-t__title';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    .c-pi-t__title {
      grid-area: c-pi-t__title;
    }
  }

  &__content-container {
    display: grid;
    gap: 4px 4px;
    grid-area: c-pi-c;
    grid-template-areas:
      'c-pi-c__name c-pi-c__id c-pi-c__quantity c-pi-c__price'
      'c-pi-c__description c-pi-c__description c-pi-c__description c-pi-c__description';
    grid-template-columns: 3fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 2fr;

    .c-pi-c__name {
      grid-area: c-pi-c__name;
    }

    .c-pi-c__id {
      grid-area: c-pi-c__id;
    }

    .c-pi-c__quantity {
      grid-area: c-pi-c__quantity;
    }

    .c-pi-c__price {
      grid-area: c-pi-c__price;
    }

    .c-pi-c__description {
      grid-area: c-pi-c__description;
    }
  }

  &__btn-container {
    display: grid;
    gap: 0 0;
    grid-area: c-pi-b;
    grid-template-areas: 'c-pi-b__btn';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    .c-pi-b__btn {
      grid-area: c-pi-b__btn;
    }
  }
}
</style>
