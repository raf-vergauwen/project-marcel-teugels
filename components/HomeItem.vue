<template>
  <article class="c-home-item">
    <div class="c-home-item__image">
      <img :src="src + product.images[0].directus_files_id" alt="" />
    </div>
    <div class="c-home-item__info">
      <NuxtLink :to="`/shop/product/${product.id}`">
        <h2 class="c-home-item__title">
          {{ product.name }}
        </h2>
      </NuxtLink>

      <div class="c-home-item__content">
        <p>{{ product.price }} EUR</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'HomeItem',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      src: 'http://157.230.126.154/assets/',
      Admin: false,
    };
  },
  computed: {
    user_role() {
      return sessionStorage.getItem('user_role');
    },
  },
  methods: {
    addProduct() {
      this.$root.$emit(
        'notify',
        `${this.product.name} has been added to your shopping basket`,
      );
    },
  },
};
</script>

<style lang="scss">
.c-home-item {
  background-color: $dark-blue;
  color: $light-bg;
  border-radius: 15px;

  &__title {
    @extend %font-size-5;
    font-weight: 400;
  }

  &__info {
    padding: $s-site-padding $s-site-padding 0px $s-site-padding;
  }

  &__image {
    img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 15px 15px 0 0;
    }
  }
}
</style>
