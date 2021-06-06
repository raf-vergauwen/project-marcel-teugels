<template>
  <div class="root">
    <store-header />
    <main class="main">
      <section class="hero" :style="bgImages.heroImage">
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
      <section class="hot-items">
        <h2 class="hot-items__title">Hot Items</h2>
        <div class="hot-items__container">
          <product-item
            v-for="product in productData"
            :key="product.id"
            :product="product"
            class="hot-items__item"
            @add-product="addProduct($event)"
          />
        </div>
      </section>
      <div class="intermezzo intermezzo--1" :style="bgImages.intermezzo1">
        <div class="intermezzo__container"></div>
      </div>
      <section class="about">
        <h2 class="about__title">About</h2>
        <div class="about__container">
          <div class="about__visual-container">
            <img :src="Images.aboutImage" alt="..." class="about__image card" />
          </div>
          <article class="about__text-container">
            <div class="about__outer-border box-border">
              <div class="about__inner-border box-border-inner">
                <h3 class="about__text-title">Marcel Teugels</h3>
                <h4 class="about__sub-title">
                  Apprentice blacksmith, conservator and restorer of wood &
                  metal
                </h4>
                <hr class="about__hr" />
                <p class="about__paragraph">
                  Adipisicing ex ea pariatur dolor sit cupidatat officia laborum
                  est esse velit Lorem dolor dolore. Id consequat proident
                  laboris eu ipsum sunt aliqua sit tempor eu dolore consectetur
                  irure. Nisi id eiusmod velit aute ea Lorem excepteur tempor
                  culpa. Laboris reprehenderit irure sunt elit labore ad enim
                  aute aliquip duis cupidatat officia. Ad id culpa in aliquip
                  dolore velit magna laboris ipsum exercitation mollit est.
                  Ipsum et mollit ea consectetur. Proident aute pariatur
                  exercitation nisi est est nisi adipisicing ut labore
                  consectetur. Ad proident nostrud sint aute nostrud labore
                  laborum minim. Laboris commodo esse irure culpa exercitation
                  tempor. Nostrud sunt quis tempor eu officia culpa magna
                  pariatur velit. Excepteur dolor adipisicing exercitation do
                  nostrud minim amet aliquip irure nostrud laboris. Voluptate
                  commodo occaecat laboris fugiat ex eu aliquip incididunt et
                  fugiat laboris. Nulla labore pariatur laboris et ut dolore eu
                  aute nulla nulla veniam occaecat. Irure consequat adipisicing
                  ex do laborum quis dolore. Reprehenderit ut esse sint
                  consectetur voluptate anim ut dolor. Elit eiusmod id qui ex
                  voluptate minim occaecat laboris laboris consectetur nostrud
                  laboris. Laborum enim ut ex do non amet. Proident est aute
                  aliqua aliquip ipsum. Id nisi Lorem occaecat reprehenderit
                  adipisicing. Nisi est sunt sunt irure tempor incididunt
                  adipisicing irure incididunt cillum. Qui amet tempor qui est
                  fugiat officia mollit reprehenderit eiusmod veniam quis culpa
                  Lorem. Sit ullamco nulla amet quis ullamco cillum. Velit
                  eiusmod enim eiusmod consectetur aute. Ad consectetur est
                  cupidatat ex enim dolor reprehenderit sit sint incididunt do
                  reprehenderit. Aliqua sit anim deserunt ad. Dolore qui ea aute
                  qui incididunt in tempor deserunt fugiat anim nulla. Elit
                  exercitation officia ad occaecat qui nostrud sunt quis in
                  ullamco voluptate ea est nulla. Esse elit aute elit sit magna
                  qui. Eu aliquip ut ut duis sint amet duis eiusmod nostrud. Non
                  minim nulla cillum aute. Sit non ex eiusmod proident anim duis
                  sunt aliqua irure dolor esse ut elit eu. Nisi nulla voluptate
                  qui sint labore irure voluptate id ad aliquip laboris est
                  adipisicing aliquip. Aute pariatur do aute irure duis qui.
                  Veniam magna ex officia nostrud cillum pariatur dolore
                  incididunt nisi sunt commodo non officia deserunt. Sint veniam
                  esse culpa eu occaecat sunt ipsum magna sint aliqua laboris.
                  Magna in do do occaecat commodo culpa. Ad cillum aute
                  consequat aute aliqua enim sunt aute tempor sit. Fugiat
                  excepteur do enim voluptate nulla sunt. Aliqua sunt cillum
                  Lorem quis commodo do. Aute ad excepteur laborum non excepteur
                  consectetur eiusmod fugiat anim labore consectetur ullamco
                  aute do. Exercitation ut sint dolor eu velit est occaecat ea
                  consectetur nulla. Culpa Lorem commodo anim proident tempor
                  irure ad ipsum et aute proident amet deserunt tempor. Tempor
                  ullamco tempor velit nostrud. Occaecat adipisicing non
                  occaecat sint. Minim ad officia cillum tempor exercitation ut
                  veniam. Veniam do do nisi Lorem quis officia sit non pariatur.
                  Consequat magna adipisicing nostrud nostrud ea esse
                  reprehenderit dolore laborum. Labore mollit culpa aliqua culpa
                  ipsum aliqua aliquip laborum magna do et voluptate ullamco.
                  Proident laboris dolore aliquip officia laboris deserunt culpa
                  occaecat. Velit magna officia laborum eiusmod ad commodo
                  laborum adipisicing excepteur do velit laboris. Ea sit nostrud
                  deserunt elit Lorem culpa Lorem veniam. Ullamco elit sit esse
                  anim cillum. Laborum sint adipisicing incididunt magna
                  consequat laborum incididunt amet. Incididunt reprehenderit
                  nulla fugiat in adipisicing.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
      <div class="intermezzo intermezzo--1" :style="bgImages.intermezzo2">
        <div class="intermezzo__container"></div>
      </div>
    </main>
    <main-footer />
  </div>
</template>

<script>
import StoreHeader from '~/components/StoreHeader';
import ProductItem from '~/components/ProductItem';
import MainFooter from '~/components/MainFooter';

export default {
  components: { StoreHeader, ProductItem, MainFooter },

  data() {
    return {
      src: 'http://157.230.126.154/assets/',
      bgImages: {
        heroImage: {
          backgroundImage:
            'url(http://157.230.126.154/assets/eaad4d0f-f450-47a0-b99a-bd7767111d7d)',
        },
        intermezzo1: {
          backgroundImage:
            'url(http://157.230.126.154/assets/e75be596-13cf-4527-8254-6423c5880acf)',
        },
        intermezzo2: {
          backgroundImage:
            'url(http://157.230.126.154/assets/319118f6-4d33-441b-81b0-d5d4a1753176)',
        },
      },
      Images: {
        aboutImage: [
          'http://157.230.126.154/assets/ba9d3960-f91c-4df1-92f9-7ae2b5e035c6',
        ],
      },

      productData: {},

      Admin: false,
      shoppingCart: [],
    };
  },

  fetch() {
    return this.fetchItems();
  },

  computed: {
    access_token() {
      return sessionStorage.getItem('access_token');
    },
    user_role() {
      return sessionStorage.getItem('user_role');
    },
  },

  methods: {
    fetchItems() {
      return fetch('http://157.230.126.154/items/products?fields=*,images.*', {
        method: 'GET',
        headers: {},
      })
        .then((response) => {
          if (!response.ok) {
            console.log('Error');
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.productData = data.data;
          this.Admin = this.user_role;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    addProduct(product) {
      this.shoppingCart.push(product.id);
      sessionStorage.setItem('shopping_cart', this.shoppingCart);
      console.log(this.shoppingCart);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  max-width: 100%;
  background-color: var(--color-background);

  &__main-container {
    // ...
  }
}

/* -------------------------------------------------------------------------- *\
-  SECTION 1: hero
\* -------------------------------------------------------------------------- */
.hero {
  @include flex-container($justify: center);
  @include full-width;

  padding: 0;
  background: center center / cover fixed;

  &__container {
    @include box-dimensions($height: 100vh, $max-width: 100vw);
    @include flex-container($justify: center);

    background-color: $bg-color--transparant-black---level-2;
  }

  &__visual {
    max-height: 35vh;
    margin: $center-me;
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

/* -------------------------------------------------------------------------- *\
-  SECTION 2: Hot Items
\* -------------------------------------------------------------------------- */
.hot-items {
  @include full-width;
  &__title {
    // ...
  }

  &__container {
    display: grid;
    gap: $buffer--l;
    grid-template-areas: '.';
    grid-template-columns: 1fr;
    grid-template-rows: repeat(9, 1fr);
    place-items: center;
    transition: $transition--default;

    @include breakpoint(s) {
      grid-template-areas: '. .';
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(5, 1fr);
    }

    @include breakpoint(l) {
      grid-template-areas: '. . .';
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }

    @include breakpoint(xl) {
      grid-template-areas: '. . . .';
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
  }

  &__item {
    @include card;

    &:hover {
      transform: translate3d(0, -$buffer--xxs, 0);

      @include breakpoint(m) {
        transform: translate3d(0, -$buffer--xs, 0);
      }

      @include breakpoint(l) {
        transform: translate3d(0, -$buffer--s, 0);
      }
    }
  }
}

/* -------------------------------------------------------------------------- *\
-  INTERMEZZO
\* -------------------------------------------------------------------------- */

.intermezzo {
  max-width: 100vw;
  height: 100vh;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;

  &__container {
    height: 100vh;
    background-color: $bg-color--transparant-black---level-2;
  }
}

/* -------------------------------------------------------------------------- *\
-  SECTION 3: About
\* -------------------------------------------------------------------------- */

.about {
  background: radial-gradient(#003, #000);

  &__container {
    @include flex-container(nowrap, column, center, center);

    @include breakpoint(s) {
      @include flex-container(wrap, row, space-evenly, stretch);
    }
  }

  &__title {
    // ...
  }

  &__container--visual {
    padding: 0 $buffer--s $buffer--xxl $buffer--s;
  }

  &__image {
    // ...
  }

  &__container--text {
    min-width: calc(#{$large-dimension--xxs} - #{$buffer--l});
    max-width: calc(#{$card--width} + #{$buffer--m});
    padding: 0;

    @include breakpoint(m) {
      min-width: calc(#{$card--width} + (#{$card--width} / 2));
    }

    @include breakpoint(l) {
      min-width: calc(#{$card--width} * 2);
    }
  }

  &__outer-border {
    top: calc((#{$card--height} / 2) + #{$buffer--s});
    margin-bottom: $buffer--xxl;
    // ...

    @include breakpoint(xs) {
      top: calc((#{$card--height} / 2) + #{$buffer--m} + #{$buffer--m});
    }

    @include breakpoint(s) {
      top: calc((#{$card--height} / 2) - #{$buffer--l} - #{$buffer--s});
      margin-bottom: 0;
    }

    @include breakpoint(m) {
      // ...
    }
  }

  &__inner-border {
    @include breakpoint(s) {
      height: calc(#{$card--height} - #{$buffer--m} + #{$buffer--m});
    }
  }

  &__text-title {
    padding: $buffer--s 0;
    font-size: $font-size--h2;
    font-variant: small-caps;

    @include breakpoint(s) {
      height: 10%;
    }
  }

  &__sub-title {
    padding: $buffer--s 0;
    font-size: $font-size--h6;

    @include breakpoint(s) {
      height: 20%;
    }

    @include breakpoint(m) {
      height: 15%;
    }
  }

  &__hr {
    height: 1%;
    border: 0;
    margin: 2% auto;
    background-image: linear-gradient(
      to right,
      hsla(var(--color-text-h), var(--color-text-s), var(--color-text-l), 0),
      hsla(
        var(--color-background-h),
        var(--color-background-s),
        var(--color-background-l),
        0.75
      ),
      hsla(var(--color-text-h), var(--color-text-s), var(--color-text-l), 0)
    );
  }

  &__paragraph {
    overflow: auto;
    height: calc(#{$card--height} - (#{$buffer--m} * 10));
    color: var(--color-background);
    text-align: justify;

    @include breakpoint(s) {
      height: 62.5%;
    }

    @include breakpoint(m) {
      height: 67.5%;
    }
  }
}
</style>
