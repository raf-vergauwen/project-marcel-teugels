<template>
  <main>
    <restauration-header />
    <div class="title__container">
      <h1>Under Construction</h1>
    </div>
  </main>
</template>

<script>
import RestaurationHeader from '~/components/RestaurationHeader';
export default {
  components: { RestaurationHeader },
};
</script>

<style lang="scss">
.title__container {
  display: flex;
  height: 90vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
}
</style>
