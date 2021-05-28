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
  width: 100vw;
  height: 90vh;
  align-items: center;
  justify-content: center;
}
</style>
