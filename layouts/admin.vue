<template>
  <div>
    <AdminHeader />
    <AccountHeader />
    <Nuxt />
    <Notify />
    <Footer />
  </div>
</template>

<script>
import Notify from '~/components/Notify';
import AdminHeader from '~/components/AdminHeader';
import Footer from '~/components/Footer.vue';

export default {
  name: 'AdminLayout',
  components: { AdminHeader, Notify, Footer },
  middleware: 'admin-auth',
};
</script>

<style lang="scss"></style>
