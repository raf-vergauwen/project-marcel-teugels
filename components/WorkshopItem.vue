<template>
  <article class="c-product-item">
    <div class="c-product-item__image">
      <img :src="src + workshop.images[0].directus_files_id" alt="" />
    </div>
    <div class="c-product-item__container">
      <NuxtLink :to="`/workshop/${workshop.id}`">
        <h2 class="c-product-item__title">
          {{ workshop.title }}
        </h2>
      </NuxtLink>
      <div class="c-product-item__content">
        <p>{{ workshop.organizer }}</p>
        <p>{{ workshop.date }}</p>
        <p>{{ workshop.text_content }}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'WorkshopItem',
  props: {
    workshop: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      src: 'http://157.230.126.154/assets/',
    };
  },
};
</script>

<style lang="scss" scoped>
.c-product-item__container {
  margin-left: 2em;
}

.c-product-item__title {
  color: $dark-bg;
}

.c-product-item {
  display: flex;
  margin: 2em 4em;
}

.c-product-item__image {
  width: 400px;
}
</style>
