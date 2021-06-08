<template>
  <div>
    <AccountHeader />
    <RestaurationHeader />
    <Nuxt />
    <Notify />
    <GlobalFooter />
  </div>
</template>

<script>
import Notify from '~/components/Notify';
import RestaurationHeader from '~/components/RestaurationHeader';
import GlobalFooter from '~/components/GlobalFooter.vue';

export default {
  name: 'RestauratieLayout',
  components: { RestaurationHeader, Notify, GlobalFooter },
  middleware: 'session',
};
</script>

<style lang="scss"></style>
