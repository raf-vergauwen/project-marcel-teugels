<template>
  <div>
    <AdminHeader />
    <AccountHeader />
    <Nuxt />
    <Notify />
  </div>
</template>

<script>
import Notify from '~/components/Notify';
import AdminHeader from '~/components/AdminHeader';

export default {
  name: 'AdminLayout',
  components: { AdminHeader, Notify },
};
</script>

<style lang="scss"></style>
