<template>
  <div>
    <AccountHeader class="print-hide" />
    <StoreHeader class="print-hide" />
    <Nuxt />
    <Notify class="print-hide" />
    <GlobalFooter class="print-hide" />
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
