<template>
  <div>
    <AccountHeader />
    <StoreHeader />
    <Nuxt />
    <Notify />
  </div>
</template>

<script>
import Notify from '~/components/Notify';
import StoreHeader from '~/components/StoreHeader';

export default {
  name: 'DefaultLayout',
  components: { Notify, StoreHeader },
  middleware: 'session',
};
</script>

<style lang="scss"></style>
