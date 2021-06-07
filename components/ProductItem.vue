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
        <h3 class="c-pi-t__title">
          {{ product.name }}
        </h3>
      </NuxtLink>
      <div class="c-product-item__content-container c-pi-c">
        <p class="c-pi-c__name">
          <fa class="item-icon" icon="tag" />
          {{ product.name }}
        </p>
        <p class="c-pi-c__id">
          <fa class="item-icon" icon="hashtag" />
          {{ product.id }}
        </p>
        <p class="c-pi-c__quantity">
          <fa class="item-icon" icon="shopping-bag" />
          {{ product.quantity_in_stock }}
        </p>
        <p class="c-pi-c__description">
          {{ product.description }}
        </p>
        <p class="c-pi-c__price">
          <fa class="item-icon" icon="euro-sign" />
          {{ product.price }}
        </p>
      </div>
      <div class="c-product-item__btn-container c-pi-b">
        <button class="c-pi-b__btn" @click="$emit('add-product', product)">
          <fa class="item-icon--btn" icon="cart-plus" />
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

<style lang="scss" scoped>
.c-product-item {
  background-color: var(--color-primary);

  &__main-container {
    @include card;

    display: grid;
    gap: $buffer--s;
    grid-template-areas:
      'c-pi-v'
      'c-pi-t'
      'c-pi-c'
      'c-pi-b';
    grid-template-columns: 1fr;
    grid-template-rows: 50fr 5fr 45fr 5fr;
  }

  &__visual-container {
    display: grid;
    grid-area: c-pi-v;
    grid-gap: 0;
    grid-template-areas: 'c-pi-v__visual';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    .c-pi-v__visual {
      max-height: $large-dimension--xxs + $large-dimension--xxxs;
      grid-area: c-pi-v__visual;
    }
  }

  &__title-container {
    display: grid;
    padding-left: 0;
    gap: 0;
    grid-area: c-pi-t;
    grid-template-areas: 'c-pi-t__title';
    grid-template-columns: auto;
    grid-template-rows: auto;

    .c-pi-t__title {
      @include overflow;

      color: var(--color-background);
      grid-area: c-pi-t__title;
    }
  }

  &__content-container {
    display: grid;
    gap: $buffer--xs;
    grid-area: c-pi-c;
    grid-template-areas:
      'c-pi-c__name c-pi-c__id c-pi-c__quantity c-pi-c__price'
      'c-pi-c__description c-pi-c__description c-pi-c__description c-pi-c__description';
    grid-template-columns: 50fr 15fr 15fr 20fr;
    grid-template-columns: 50fr auto auto auto;
    grid-template-rows: auto 4fr;

    .c-pi-c__name {
      @include overflow;

      color: var(--color-background--dark);
      grid-area: c-pi-c__name;
    }

    .c-pi-c__id {
      padding: $buffer--xs $buffer--s;
      color: var(--color-background--dark);
      grid-area: c-pi-c__id;
      text-align: center;
    }

    .c-pi-c__quantity {
      padding: $buffer--xs $buffer--s;
      color: var(--color-background--dark);
      grid-area: c-pi-c__quantity;
      text-align: center;
    }

    .c-pi-c__price {
      padding: $buffer--xs $buffer--s;
      color: var(--color-background--dark);
      grid-area: c-pi-c__price;
      text-align: center;
    }

    .c-pi-c__description {
      @include scrollbar-style;

      max-height: $small-dimension--xxl + $small-dimension--xxxl;
      color: var(--color-background--dark);
      grid-area: c-pi-c__description;
      // text-overflow: ellipsis;
    }
  }

  &__btn-container {
    display: grid;
    gap: 0;
    grid-area: c-pi-b;
    grid-template-areas: 'c-pi-b__btn';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    .c-pi-b__btn {
      padding: 0;
      margin: 0;
      grid-area: c-pi-b__btn;
    }
  }
}
</style>
