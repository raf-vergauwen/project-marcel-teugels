<template>
  <nuxt-link v-if="nuxt" :to="to">
    <slot></slot>
  </nuxt-link>
  <a v-else :href="to">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: ['nuxt', 'to'],
  // props: {
  //   nuxt: {
  //     type: String,
  //     required: true,
  //   },
  //   to: {
  //     type: String,
  //     required: true,
  //   },
  // },
};
</script>
