<template>
  <main class="main">
    <!-- * ------------------------------------------------------------------>
    <div class="main__container">
      <store-header />
      <!-- + ----------------<< SECTION-1: .hero >>-------------------------->
      <section id="hero" class="hero full-width flex">
        <!-- * -------------------------------------------------------------->
        <div class="hero__container flex">
          <svg
            class="hero__visual"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M376.7.1 255.8 121 135 .1h-52.9v343.4h53V219.1h94.3v291.3h52.8V219.1h94.3v124.5h53V.1h-52.8zM135.4 167.4v-94l94 94h-94zm240.9 0h-94l94-94v94z"
            />
          </svg>
          <h1 class="hero__subject">Marcel Teugels</h1>
          <h2 class="hero__title">Webshop Homepage</h2>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import StoreHeader from '~/components/StoreHeader';

export default {
  components: { StoreHeader },
};
</script>

<style lang="scss">
/* -------------------------------------------------------------------------- *\
-  SECTION 1: hero
\* -------------------------------------------------------------------------- */

.hero {
  position: relative;
  padding: 0;
  background-attachment: fixed;
  // background-image: url('/assets/media/images/marcel-teugels/favorites/kantrechten--05-upscaled.jpg');
  background-position: center center;
  background-size: cover;

  &__container {
    height: 100vh;
    justify-content: center;
    background-color: $bg-color--transparant-black---level-2;
    place-content: center;
    place-items: center;
  }

  &__visual {
    max-height: 40vh;
    padding-top: $buffer--l;
    fill: var(--color-tertiary);
    filter: drop-shadow(0 0 0.1em var(--color-text));
  }

  &__subject {
    color: var(--color-background);
    filter: drop-shadow(0 0 0.1em var(--color-text));
  }

  &__title {
    padding-top: 0;
    color: var(--color-secondary);
    filter: drop-shadow(0 0 0.1em var(--color-text));
    font-family: 'Oswald', sans-serif;
    font-size: $font-size--h2;
    font-weight: 600;
  }
}
</style>
