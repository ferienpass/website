<template>
  <div class="mt-24 mb-24 py-12 bg-white">
    <block-headline>
      <template #mustache>
        Sorgenfreie Ferienplanung
      </template>

      <span class="text-blue-400">ferienpass</span><span class="text-tint">.</span><span
      class="text-blue-700">online</span> erleichtert das Leben <br class="hidden md:block">für alle Beteiligten

      <template #teaser>
        Bei einer Datenbank für die Freizeitangebote hört es nicht auf. Eltern, Veranstalter*innen und
        Verwaltungsmitarbeiter*innen haben völlig veschiedene Anforderungen an ein Ferienpass-Programm.
      </template>
    </block-headline>

    <block-features-three-column class="mt-16">

      <feature-vertical title="Ferienpass-Verwaltung" icon-class="bg-tint">
        Die Ferienpass-Angebote werden in einer zentralen Datenbank gespeichert und verwaltet. Die Herausgeber*innen
        haben so alles im Blick. Die Veranstalter*innen pflegen die Angebote selbst ein – der Aufwand der Verwaltung
        wird auf ein Minimum reduziert.

        <template #icon>
          <icon-heart class="w-8 h-8"></icon-heart>
        </template>
      </feature-vertical>

      <feature-vertical title="Veranstalter*innen" icon-class="bg-tint" class="mt-10 sm:mt-0">
        Die Veranstalter*innen können die Angebote federführend erstellen und gestalten. So haben sie alle Anmeldungen
        auf einen Blick parat, können auf Wartelisten reagieren und neue Termine veröffentlichen.

        <template #icon>
          <icon-heart class="w-8 h-8"></icon-heart>
        </template>
      </feature-vertical>

      <feature-vertical title="Eltern" icon-class="bg-tint" class="mt-10 sm:mt-0">
        Die Eltern können den Ferienpass entspannt in der Kaffeepause, unterwegs oder zuhause „durchblättern“.
        Anmeldungen werden zentral und mit einem Klick durchgeführt. Änderungen und Wartelisten-Zusagen kommen
        automatisch per E-Mail oder SMS.

        <template #icon>
          <icon-heart class="w-8 h-8"></icon-heart>
        </template>
      </feature-vertical>

    </block-features-three-column>

  </div>
</template>


<script>

  import BlockHeadline from "./BlockHeadline";
  import FeatureVertical from "./FeatureVertical";
  import IconHeart from "./IconHeart";
  import BlockFeaturesThreeColumn from "./BlockFeaturesThreeColumn";

  export default {
    components: {
      BlockFeaturesThreeColumn,
      IconHeart,
      FeatureVertical,
      BlockHeadline
    }
  }
</script>

