<template>
  <div>
    <Nuxt />
    <Notify />
  </div>
</template>

<script>
import Notify from '~/components/Notify';
export default {
  name: 'HomeLayout',
  components: { Notify },
};
</script>

<style lang="scss"></style>
