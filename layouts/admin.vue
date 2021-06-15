<template>
  <div>
    <AccountHeader />
    <AdminHeader />
    <Nuxt />
    <Notify />
    <GlobalFooter />
  </div>
</template>

<script>
import Notify from '~/components/Notify';
import AdminHeader from '~/components/AdminHeader';
import GlobalFooter from '~/components/GlobalFooter.vue';

export default {
  name: 'AdminLayout',
  components: { AdminHeader, Notify, GlobalFooter },
  middleware: 'admin-auth',
};
</script>

<style lang="scss"></style>
