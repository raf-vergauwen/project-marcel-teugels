<template>
  <div>
    <AccountHeader />
    <Nuxt />
    <Notify />
  </div>
</template>

<script>
import Notify from '~/components/Notify';

export default {
  name: 'AdminLayout',
  components: { Notify },
};
</script>

<style lang="scss"></style>
