<template>
  <footer class="c-globalfooter">
    <div class="c-globalfooter__container">
      <div class="c-globalfooter__nav">
        <p class="c-globalfooter__item">Marcel Teugels</p>
        <span class="c-globalfooter__break">•</span>
        <p class="c-globalfooter__item">+32 474 22 56 08</p>
        <span class="c-globalfooter__break">•</span>
        <p class="c-globalfooter__item">marcel_teugels@hotmail.com</p>
        <span class="c-globalfooter__break">•</span>
        <a
          href="https://www.instagram.com/marcelteugels/"
          class="c-globalfooter__item"
          >instagram</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'GlobalFooter',
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.c-globalfooter {
  background-color: $dark-bg;
  display: flex;
  justify-content: center;
  color: $light-bg;

  &__container {
    padding: 1.5em;
  }

  &__nav {
    display: flex;
    justify-content: center;
    align-items: center;

    @include md() {
      flex-direction: column;
    }

    &__item {
      padding: $s-site-padding $s-site-padding;
      text-decoration: none;
      color: $light-bg;

      @include md() {
        margin: 1em;
      }
    }
  }
  &__break {
    margin: 0em 2em;

    @include md() {
      display: none;
    }
  }

  &__item {
    margin: 0em;
    font-size: 1em;
  }
}
</style>
