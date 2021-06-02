<template>
  <main class="main">
    <!-- * ------------------------------------------------------------------>
    <store-header />
    <section class="hero full-width" :style="src">
      <!-- * -------------------------------------------------------------->
      <div class="hero__container">
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
    <section class="diensten">
      <div class="diensten--container">
        <img
          class="diensten__img"
          src="http://157.230.126.154/assets/e75be596-13cf-4527-8254-6423c5880acf"
          alt=""
        />
      </div>
      <div class="diensten__info">
        <p class="diensten__text">
          hjkdsljghj ruifjsldknfjghru eoijs fkmdlvfjnd gheiorze fpqjkmldv
          snfjgrhiefjop kdlvsfjngrhui ojefqckl,dnfsg jrhuei ojsdklvg
          nrjeijsodvklng jreuhij osdklvfn gjreuh ijsodklvsgh iruzo jsdlvkn
          gjrheiuojsp dvlmkgihro jsp dvilgrh ojps hjkdsljghj ruifjsldknfjghru
          eoijs fkmdlvfjnd gheiorze fpqjkmldv snfjgrhiefjop kdlvsfjngrhui
          ojefqckl,dnfsg jrhuei ojsdklvg nrjeijsodvklng jreuhij osdklvfn gjreuh
          ijsodklvsgh iruzo jsdlvkn gjrheiuojsp dvlmkgihro jsp dvilgrh ojps
          hjkdsljghj ruifjsldknfjghru eoijs fkmdlvfjnd gheiorze fpqjkmldv
          snfjgrhiefjop kdlvsfjngrhui ojefqckl,dnfsg jrhuei ojsdklvg
          nrjeijsodvklng jreuhij osdklvfn gjreuh ijsodklvsgh iruzo jsdlvkn
          gjrheiuojsp dvlmkgihro jsp dvilgrh ojps hjkdsljghj ruifjsldknfjghru
          eoijs fkmdlvfjnd gheiorze fpqjkmldv snfjgrhiefjop kdlvsfjngrhui
          ojefqckl,dnfsg jrhuei ojsdklvg nrjeijsodvklng jreuhij osdklvfn gjreuh
          ijsodklvsgh iruzo jsdlvkn gjrheiuojsp dvlmkgihro jsp dvilgrh ojps
        </p>
        <div class="button__container">
          <button class="diensten__btn">lees meer</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import StoreHeader from '~/components/StoreHeader';
export default {
  components: { StoreHeader },
  data() {
    return {
      src: {
        backgroundImage:
          'url(http://157.230.126.154/assets/eaad4d0f-f450-47a0-b99a-bd7767111d7d)',
      },
    };
  },
};
</script>

<style lang="scss">
.main {
  max-width: 100%;
}
.hero {
  @include flex-container($justify: center);

  max-width: 100%;
  padding: 0;
  background: center center / cover fixed;

  &__container {
    @include box-dimensions($height: 100vh);
    @include flex-container($justify: center);

    background-color: $bg-color--transparant-black---level-2;
  }

  &__visual {
    max-height: 35vh;
    fill: var(--color-tertiary);
    filter: drop-shadow(0 0 0.1em var(--color-text));
  }

  &__subject {
    color: var(--color-background);
    filter: drop-shadow(0 0 0.1em var(--color-text));
  }

  &__title {
    color: var(--color-secondary);
    filter: drop-shadow(0 0 0.1em var(--color-text));
    font-family: $font-family--component;
  }
}
</style>
