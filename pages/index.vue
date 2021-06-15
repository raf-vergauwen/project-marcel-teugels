<template>
  <main class="home">
    <div class="home__webshop">
      <div class="home__webshop-container">
        <h1 class="home__title">webshop</h1>
        <p class="home__webshop-text">
          Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies.
          Potenti nullam ac tortor vitae purus faucibus. Vel quam elementum
          pulvinar etiam non quam lacus suspendisse faucibus.
        </p>
        <nuxt-link class="home__link" to="/shop/storefront"> webshop</nuxt-link>
      </div>
    </div>
    <div class="home__restauratie">
      <div class="home__restauratie-container">
        <h2 class="home__title">restauratie</h2>
        <p class="home__restauratie-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi
          bibendum neque egestas congue quisque egestas diam in. Mauris pharetra
          et ultrices neque ornare aenean euismod elementum.
        </p>
        <nuxt-link class="home__link home__restauratie-link" to="/restauratie">
          restauratie
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'home',
};
</script>

<style lang="scss">
.home {
  display: flex;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(110deg, #b0c4de 50%, #132636 50%);

  &__title {
    font-size: 30px;
  }

  &__link {
    width: 200px;
    height: 35px;
    border-radius: 30px;
    border: 0;
  }

  &__webshop {
    width: 50vw;
    height: 100vh;

    &-text {
      width: 500px;
    }

    &-container {
      margin: 5em;
    }
  }

  &__restauratie {
    color: white;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 50vw;
    height: 100vh;

    &-link {
      text-align: right;
    }

    &-text {
      width: 500px;
      text-align: right;
    }

    &-container {
      margin: 5em;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
}
</style>
