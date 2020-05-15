<template>

  <div class="py-12 bg-white">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <block-headline>
        Veranstalter*innen-Portal
        <template #teaser>
          Den Veranstalter*innen steht ein einfach zu bedienendes Portal bereit.
        </template>
      </block-headline>

      <block-features-centered-grid class="mt-16 md:mt-20">
        <feature-horizontal title="Dashboard" icon-class="bg-blue-500">
          Veranstalter*innen haben Zugriff auf ein Dashboard, aus dem hervorgeht, was die nächsten Schritte für den
          Veranstalter sind: Wie viel Zeit hab ich noch zum Bearbeiten meiner Angebote? Wann geht der Ferienpass online?

          <template #icon>
            <icon-view-boards class="h-6 w-6"></icon-view-boards>
          </template>
        </feature-horizontal>
        <feature-horizontal class="mt-10 sm:mt-0" title="Verständliche Eingabe" icon-class="bg-blue-500">
          Die Auflistung der Ferienpass-Angebot ist übersichtlich. Die Eingabemaske ist robust und leicht verwendbar. Es
          wird ein Live-Korrekturabzug bereitgestellt, mit denen die Veranstalter das Angebot begutachten können.

          <template #icon>
            <icon-pencil-alt class="h-6 w-6"></icon-pencil-alt>
          </template>
        </feature-horizontal>
        <feature-horizontal class="mt-10 sm:mt-0" title="Teilnahmeliste" icon-class="bg-blue-500">
          Veranstalter*innen können auf die Teilnahmeliste des Angebotes zugreifen und diese als PDF exportieren. Es
          können Kinder ergänzt werden oder Kindern abgesagt werden.

          <template #icon>
            <icon-user-group class="h-6 w-6"></icon-user-group>
          </template>
        </feature-horizontal>
        <feature-horizontal class="mt-10 sm:mt-0" title="Benutzerverwaltung" icon-class="bg-blue-500">
          Angebote eines Vereins oder einer Firma können von verschiedenen festgelegten Nutzern bearbeitet werden.
          Aus der Praxis wissen wir, dass Ehrenamtliche in verschiedenen Vereinen oder Firmen tätig sein können.
          Deswegen können Nutzer auch mehreren Organisationen zugewiesen werden.

          <template #icon>
            <icon-user-add class="h-6 w-6"></icon-user-add>
          </template>
        </feature-horizontal>
      </block-features-centered-grid>
    </div>
  </div>

</template>


<script>

  import BlockFeaturesCenteredGrid from "./BlockFeaturesCenteredGrid";
  import BlockHeadline from "./BlockHeadline";
  import FeatureVertical from "./FeatureVertical";
  import FeatureHorizontal from "./FeatureHorizontal";
  import IconCloudDownload from "./IconCloudDownload";
  import IconUserGroup from "./IconUserGroup";
  import IconUserAdd from "./IconUserAdd";
  import IconPencilAlt from "./IconPencilAlt";
  import IconViewBoards from "./IconViewBoards";

  export default {
    components: {
      IconViewBoards,
      IconPencilAlt,
      IconUserAdd,
      IconUserGroup,
      IconCloudDownload,
      FeatureHorizontal,
      FeatureVertical,
      BlockHeadline,
      BlockFeaturesCenteredGrid

    }
  }
</script>

