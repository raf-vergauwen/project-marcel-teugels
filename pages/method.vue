<template>
  <main>
    <restauration-header />
    <div class="conservation__container">
      <img
        class="conservation__img"
        src="http://157.230.126.154/assets/42c14dc8-9b7c-48a4-96ab-491e80ed99f7"
        alt=""
      />
      <div>
        <h1>conservatie van houtwerk</h1>
        <p class="conservation__info">
          De conservatie en restauratie van houten erfgoed objecten omvat een
          brede waaier aan object typen. Dit kan gaan over meubels,
          beeldhouwwerk, interieur elementen zoals vloeren of lambriseringen,
          gebinten en zo verder. De behandeling wordt echter grotendeels op
          dezelfde wijze benaderd. Het object wordt grondig bestudeerd en
          gedocumenteerd om de huidige schadetoestand te bepalen en te
          begrijpen. Met deze informatie kan de meest geschikte
          behandelingsstrategie bepaald worden. Het gewenste eindresultaat van
          de klant en de toekomstige functie van het object worden hierbij in
          acht genomen en kunnen de graad van interventie beïnvloeden .Een
          behandeling bestaat vaak uit een oppervlakte reiniging, het verlijmen
          van losgekomen verbindingen, elementen en openstaande lijmnaden, het
          bijmaken van ontbrekende onderdelen of bijsnijden van sculpturale
          elementen, invulling maken en retoucheren en het regenereren van de
          afwerkingslaag of het aanbrengen van een nieuwe indien nodig. Voor
          polychrome objecten, dit zijn objecten die voorzien zijn één of
          meerdere verflagen, zoals beeldhouwwerk of meubilair, wordt bijzondere
          aandacht gegeven aan deze afwerkingslagen. Een grondig kleuren- en
          stratigrafisch (lagenopbouw) onderzoek laat ons toe het object beter
          te begrijpen op historisch, materiaal technisch en esthetisch vlak en
          help bij het bepalen van een geschikte behandeling. Het verflagen
          pakket kan soms fragiel zijn en een consolidatie of fixatie nodig
          hebben om verder verlies te voorkomen. Lacunes kunnen vervolgens
          ingevuld en geretoucheerd worden om tot een harmonieus geheel te
          komen.
        </p>
      </div>
    </div>
    <div class="conservation__container">
      <div>
        <h1>taxidermi</h1>
        <p class="conservation__info">
          Vanuit mijn liefde voor de natuur, geschiedenis en materialen vloeide
          een fascinatie voor natuurhistorische collecties voort. Combineer dit
          met mijn passie voor ambacht en kunst en dan kom je al snel bij het
          opzetten van dieren (taxidermie) terecht. Ik besloot mijn masterjaar
          aan de universiteit in het kader van de conservatie en restauratie van
          taxidermie te plaatsen. Ik liep stage aan het Koninklijk Belgisch
          Instituut voor Natuurwetenschappen (KBIN) waar ik meewerkte aan de
          restauratie van de collectie jachttrofeeën van het Koninklijk Museum
          voor Midden-Afrika (KMMA) in Tervuren. Om me nog verder te verdiepen
          in deze unieke discipline reisde ik naar het Verenigd Koninkrijk voor
          het volgen van een “Taxidermy Conservatie Course” onder leiding van
          gerenommeerd conservator van natuurhistorische collectie, Simon Moore.
          Later volgde ik ook een workshop voor het zelf opzetten van een dier
          om de materie en het proces eigenhandig te ervaren .Opgezette
          dierenhuiden zijn vaak zeer kwetsbare objecten met veel organische –
          en anorganische materialen die samen het object vormgeven. Ze lijden
          onder specifieke schadepatronen die eigen zijn aan deze materialen en
          kunnen zware schade oplopen door het krimp- en zwelgedrag van de huid
          als reactie op de relatieve luchtvochtigheid van de ruimte waarin het
          object zich bevindt. Dit leidt vaak tot grote scheuren in de huid en
          het kassen van de originele naainaden .Ook de inwendige structuur,
          vaak een houten of metalen armatuur bekleed met een organisch
          vulmiddel zoals stro, wol, turf, etc. kan met de jaren vaak schade
          oplopen.
        </p>
      </div>
      <img
        class="conservation__img"
        src="http://157.230.126.154/assets/237f22d2-514a-4a3c-b65b-640011ead570"
        alt=""
      />
    </div>
    <div class="conservation__container">
      <img
        class="conservation__img"
        src="http://157.230.126.154/assets/2f329780-b1fe-4bda-8658-31de6220a2cc"
        alt=""
      />
      <div>
        <h1>conservatie van smeedwerk</h1>
        <p class="conservation__info">
          Historisch smeedwerk heeft vaak het meest geleden van corrosie (roest)
          en mechanische schade. Hierdoor zijn vaak onderdelen verloren gegaan
          of vervormd. Tijdens de restauratie wordt gezocht naar de oorzaak van
          deze schade en vervolgens zo goed mogelijk verholpen. Het object dient
          roestvrij gemaakt te worden, verdwenen onderdelen worden bijgesmeed en
          teruggeplaatst, vervormde stukken recht gezet en tenslotte krijgt
          alles opnieuw een egale afwerkingslaag.
        </p>
      </div>
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
.conservation__img {
  height: 400px;
}

.conservation__info {
  margin: 1em;
}

.conservation__container {
  display: flex;
  width: 100vw;
  margin-right: 3em;
  margin: 3em 0em;
  justify-content: center;
}
</style>
