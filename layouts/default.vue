<template>
  <div>
    <AccountHeader />
    <StoreHeader />
    <Nuxt />
    <Notify />
    <Footer />
  </div>
</template>

<script>
import Notify from '~/components/Notify';
import StoreHeader from '~/components/StoreHeader';
import Footer from '~/components/Footer.vue';

export default {
  name: 'DefaultLayout',
  components: { Notify, StoreHeader, Footer },
};
</script>

<style lang="scss"></style>
