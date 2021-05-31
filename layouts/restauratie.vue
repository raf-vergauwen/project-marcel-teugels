<template>
  <div>
    <AccountHeader />
    <RestaurationHeader />
    <Nuxt />
    <Notify />
    <Footer />
  </div>
</template>

<script>
import Notify from '~/components/Notify';
import RestaurationHeader from '~/components/RestaurationHeader';
import Footer from '~/components/Footer.vue';

export default {
  name: 'RestauratieLayout',
  components: { RestaurationHeader, Notify, Footer },
};
</script>

<style lang="scss"></style>
