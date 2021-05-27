<template>
  <main class="home">
    <div class="home__webshop">
      <div class="home__webshop-container">
        <h1 class="home__title">webshop</h1>
        <p class="home__webshop-text">
          hfdjkslkdj ufridokjfhd hdd jjdjjdjd djdjdjjd jdjdjjd jsjdjjdjd islkkss
          jjjdjd jjdjdjjdjd hfdjkslkdj ufridokjfhd hdd jjdjjdjd djdjdjjd jdjdjjd
          jsjdjjdjd islkkss jjjdjd jjdjdjjdjd
        </p>
        <nuxt-link class="home__link" to="/storefront"> webshop</nuxt-link>
      </div>
    </div>
    <div class="home__restauratie">
      <div class="home__restauratie-container">
        <h2 class="home__title">restauratie</h2>
        <p class="home__restauratie-text">
          hfdjkslkdj ufridokjfhd hdd jjdjjdjd djdjdjjd jdjdjjd jsjdjjdjd islkkss
          jjjdjd jjdjdjjdjd hfdjkslkdj ufridokjfhd hdd jjdjjdjd djdjdjjd jdjdjjd
          jsjdjjdjd islkkss jjjdjd jjdjdjjdjd
        </p>
        <nuxt-link
          class="home__link home__restauratie-link"
          to="/home-restauratie"
        >
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
