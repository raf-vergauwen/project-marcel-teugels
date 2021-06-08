<template>
  <div>
    <AccountHeader />
    <StoreHeader />
    <Nuxt />
    <Notify />
    <GlobalFooter />
  </div>
</template>

<script>
import Notify from '~/components/Notify';
import StoreHeader from '~/components/StoreHeader';
import GlobalFooter from '~/components/GlobalFooter.vue';

export default {
  name: 'DefaultLayout',
  components: { Notify, StoreHeader, GlobalFooter },
  middleware: 'session',
};
</script>

<style lang="scss"></style>
