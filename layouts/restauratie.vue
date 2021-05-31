<template>
  <div>
    <AccountHeader />
    <RestaurationHeader />
    <Nuxt />
    <Notify />
  </div>
</template>

<script>
import Notify from '~/components/Notify';
import RestaurationHeader from '~/components/RestaurationHeader';

export default {
  name: 'RestauratieLayout',
  components: { RestaurationHeader, Notify },
};
</script>

<style lang="scss"></style>
