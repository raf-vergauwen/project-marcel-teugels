<template>
  <section class="home">
    <div class="home__webshop">
      <div class="home__webshop--container">
        <h1 class="home__webshop--title">webshop</h1>
        <p class="home__webshop--text">
          Ipsum dolor voluptate quis quis dolor mollit id pariatur velit enim et
          irure pariatur. Eiusmod proident id sint irure exercitation aliqua est
          ad officia consequat. Sunt eu incididunt nulla mollit officia do nisi
          esse do nisi. Esse aliqua velit exercitation irure non eu dolore
          mollit pariatur ut sit.
        </p>
        <button>
          <a href="/webshop/home-webshop">webshop</a>
        </button>
      </div>
    </div>
    <div class="home__restoration">
      <div class="home__restoration--container">
        <h2 class="home__restoration--title">restoration</h2>
        <p class="home__restoration--text">
          Fugiat ullamco et cillum reprehenderit magna ullamco ipsum sit. Quis
          sunt ullamco ut enim ullamco sit nisi ex velit aliqua id cupidatat
          laborum tempor. Excepteur sit exercitation incididunt incididunt dolor
          adipisicing tempor deserunt.
        </p>
        <button>
          <a href="/restoration/home-restoration">restoration</a>
        </button>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss">
body {
  margin: 0px;
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

  &__restoration {
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
