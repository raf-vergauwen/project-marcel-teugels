<template>
  <main>
    <section class="hero"></section>
    <section class="diensten">
      <div class="diensten__img-container">
        <img
          class="diensten__img"
          src="http://157.230.126.154/assets/e75be596-13cf-4527-8254-6423c5880acf"
          alt=""
        />
      </div>
      <div class="diensten__info">
        <p class="diensten__info-text">
          Na de stage in het KIK werkte ik twee en een half jaar lang als
          restaurator van hout en metaal voor de restauratiefirma Remmen bv en
          startte ik een tweejarig Meester-Leerling-Traject als opleiding tot
          kunstsmid met steun van de Vlaamse Overheid, Departement Cultuur,
          Jeugd en Media. <br />
          In maart 2021 startte ik als zelfstandige restaurator en ambachtsman
          en kan je als klant bij mij terecht voor de conservatie en restauratie
          van houten erfgoed, objecten, meubels, (polychroom) beeldhouwwerk,
          taxidermie (opgezette dieren), etnografie en smeedwerk. Maar ook voor
          historische reproducties in hout en smeedwerk en hedendaagse creaties
          op maat in hout en metaal. <br />Heeft u een mooi historisch object in
          uw bezit of heeft u ergens iets gezien wat u graag laat kopieren. Ik
          denk aan historische objecten in hout en metaal, smeedwerk,
          vakwerkbouw, etc. Contacteer mij om de mogelijkheden te bespreken. De
          objecten kunnen gekopieerd worden met historische materialen en
          technieken, perfect om te integreren in een historische setting of als
          blikvanger in een hedendaagse context.
        </p>
      </div>
    </section>
    <section class="about">
      <div class="about__marcel">
        <p class="about__marcel-text">
          Ik studeerde af als master in de conservatie en restauratie van hout
          aan de Universiteit van Antwerpen (UA). Tijdens mijn bachelor werkte
          ik hoofdzakelijk rond de restauratie van historisch, (beschilderd)
          meubilair. In de master verschoof ik de focus naar de restauratie en
          conservatie van natuurhistorische collecties, en in het bijzonder de
          restauratie van taxidermie (opgezette dieren). Ik liep in dit
          masterjaar stage aan het Koninklijk Belgisch Instituut voor
          Natuurwetenschappen (KBIN) waar ik meewerkte aan de restauratie van de
          collectie jachttrofeeën van het Koninklijk Museum voor Midden-Afrika
          (KMMA) in Tervuren. Om me verder te verdiepen in deze unieke
          discipline reisde ik naar het Verenigd Koninkrijk voor het volgen van
          een “Taxidermy Conservatie Course” van enkele dagen, onder leiding van
          gerenommeerd conservator van natuurhistorische collectie, Simon Moore.
          <br />
          Na het behalen van mijn masterdiploma begon ik met de steun van het
          Fonds Baillet Latour aan een jaar lange vervolmakingsstage in het
          restauratie-conservatie atelier voor polychrome houtsculptuur van het
          Koninklijk Instituut voor het Kunstpatrimonium (KIK) in Brussel. Hier
          werkte ik samen met de top van de Belgische erfgoedwerkers aan
          houtsnijwerk topstukken uit de lage landen.
        </p>
        <div class="about__img--container">
          <img
            class="about__img"
            src="http://157.230.126.154/assets/8368132e-0628-432a-bcd1-b9f742b9629c"
            alt=""
          />
        </div>
      </div>
      <div class="panorama"></div>
      <div class="about__workshops">
        <div class="about__container">
          <p>
            smeden (introductie, mes, hamer?), lepelsnijden, Historische
            houtbewerkingstechnieken: Kantrechten, timberframing, vakwerkbouw,
            info welke workshop ik aanbied, plaats voor organisatie zoals musea
            of scholen on een workshop naar keuze aan te vragen, en een plaats
            waar ikzelf vastgelegde workshops aankondig en een manier voor
            mensen om zich ervoor in te schrijven <br />
            Heeft u of uw organisatie interesse in het organiseren van een
            workshop of een demonstratie in een historisch ambacht, zoals
            smeden, kantrechten, vakwerkbouw, lepelsnijden, …? Contacteer mij
            via….
          </p>
          <div class="about__btn-workshop link-btn">
            <NuxtLink :to="`/restauratie/workshop`">
              <h1 class="about__btn-workshop__name link-btn-title">
                bekijk alle workshops
              </h1>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="contact-h">
      <div class="contact-h__container">
        <img
          class="contact-h__img"
          src="http://157.230.126.154/assets/8034a8a4-1e35-4e4d-993f-c5e165d56d05"
          alt=""
        />
        <p class="contact-h__text"></p>
      </div>
      <div class="about__btn-contact link-btn">
        <NuxtLink :to="`contact`">
          <h1 class="about__btn-contact__name link-btn-title">contact</h1>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'RestauratieIndexPage',
  layout: 'restauratie',
};
</script>

<style lang="scss">
a {
  color: white;
  text-decoration: none;
}

.hero {
  height: 90vh;
  width: 100vw;
  background-image: linear-gradient(110deg, #b0c4de 14.8%, #132636 14.8%);
}

.diensten {
  min-height: 60vh;
  display: flex;
  background-color: #f7f5f5;

  &__img {
    height: 50vh;

    &-container {
      display: flex;
      align-items: center;
      margin-right: 50px;
    }
  }

  &__info {
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &-text {
      margin: 30px 0px;
      font-size: 17px;
    }
  }
}

.about {
  height: 150vh;
  background-color: #b0c4de;

  &__marcel {
    height: 60vh;
    display: flex;
    justify-content: space-between;

    &-text {
      width: 50vw;
      margin: 6em 1em 1em 10vw;
    }
  }

  &__img {
    height: 50vh;
    margin-right: 5vw;

    &--container {
      display: flex;
      align-items: flex-end;
      flex-direction: column-reverse;
    }
  }

  &__btn {
    &-workshop {
      background-color: $light-bg;

      &__name {
        color: $dark-blue;
      }
    }

    &-contact {
      background-color: $dark-blue;
      margin-top: 2em;

      &__name {
        color: $light-bg;
      }
    }
  }

  &__workshops {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 50vh;
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
  }
}

.contact-h {
  height: 65vh;
  background-color: #f7f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__container {
    display: flex;
    width: 80vw;
  }

  &__img {
    height: 40vh;
    margin-right: 2em;
  }

  &__btn {
    background-color: #132636;
    color: #f7f5f5;
  }
}

.panorama {
  background-color: #f7f5f5;
  width: 100vw;
  height: 40vh;
  background-image: url('http://157.230.126.154/assets/eaad4d0f-f450-47a0-b99a-bd7767111d7d');
  background-size: cover;
  background-position: 0% -300px;
}
</style>
