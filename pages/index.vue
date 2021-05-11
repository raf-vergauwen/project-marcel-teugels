<template>
  <section class="home">
    <div class="home__webshop">
      <div class="home__webshop--container">
        <h1>webshop</h1>
        <p class="home__webshop--text">
          hfdjkslkdj ufridokjfhd hdd jjdjjdjd djdjdjjd jdjdjjd jsjdjjdjd islkkss
          jjjdjd jjdjdjjdjd hfdjkslkdj ufridokjfhd hdd jjdjjdjd djdjdjjd jdjdjjd
          jsjdjjdjd islkkss jjjdjd jjdjdjjdjd
        </p>
        <button>webshop</button>
      </div>
    </div>
    <div class="home__restauratie">
      <div class="home__restauratie--container">
        <h2>restauratie</h2>
        <p class="home__restauratie--text">
          hfdjkslkdj ufridokjfhd hdd jjdjjdjd djdjdjjd jdjdjjd jsjdjjdjd islkkss
          jjjdjd jjdjdjjdjd hfdjkslkdj ufridokjfhd hdd jjdjjdjd djdjdjjd jdjdjjd
          jsjdjjdjd islkkss jjjdjd jjdjdjjdjd
        </p>
        <button>restauratie</button>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo';

export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss">
body {
  margin: 0px;
  color: white;
}

.home {
  display: flex;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(110deg, #b0c4de 50%, #132636 50%);

  &__webshop {
    width: 50vw;
    height: 100vh;

    &--text {
      width: 500px;
    }

    &--container {
      margin: 5em;
    }
  }

  &__restauratie {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 50vw;
    height: 100vh;

    &--text {
      width: 500px;
      text-align: end;
    }

    &--container {
      margin: 5em;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
}

button {
  width: 200px;
  height: 35px;
  border-radius: 30px;
  border: 0px;
}

h1 {
  font-size: 30px;
}

h2 {
  font-size: 30px;
}
</style>
