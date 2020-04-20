<template>
  <div>

    <div class="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <svg class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404"
             height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20"
                     patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"/>
        </svg>

        <block-headline>
          Verwaltungs&shy;oberfläche
          <template #teaser>
            Sie erhalten eine Weboberfläche, die eine Reihe nützlicher Funktionen für die Verwaltung und Herausgabe
            eines Ferienpasses bereitstellt.
          </template>
        </block-headline>

        <block-features-image-right>
          <template #headline>
            <h4 class="text-2xl leading-8 font-extrabold text-blue-900 tracking-tight sm:text-3xl sm:leading-9">
              Alles im Blick
            </h4>
            <p class="mt-3 text-lg leading-7 text-gray-500">
              Im sogenannten Backend laufen alle Fäden zusammen. Sie können die Liste mit aktiven Veranstaltern
              einsehen, alle eingetragenen Ferienpass-Angebote durchgehen und behalten den Überblick.
            </p>
          </template>
          <template #features>
            <ul class="mt-10">
              <li>
                <feature-horizontal title="Programmplanung getaktet" icon-class="bg-blue-500">
                  Bei der Planung eines neuen Ferienpasses legen Sie alle Zeitphasen fest: Bis wann
                  dürfen die Veranstalter*innen Angebote eintragen? Ab wann dürfen sich Kinder zu
                  Angeboten anmelden? Sie sind über alles auf dem Laufenden.

                  <template #icon>
                    <icon-calendar class="h-6 w-6"></icon-calendar>
                  </template>
                </feature-horizontal>
              </li>
              <li class="mt-10">
                <feature-horizontal title="Anmeldesystem auswählen" icon-class="bg-blue-500">
                  Bei dem Windhundverfahren werden die Kinder unmittelbar auf die Teilnehmerliste
                  gesetzt. Wählen Sie hingegen das Losverfahren, haben Sie es in der Hand, die Plätze
                  nach eigenem Ermessen zuzuweisen.

                  <template #icon>
                    <icon-scale class="h-6 w-6"></icon-scale>
                  </template>
                </feature-horizontal>
              </li>
            </ul>
          </template>
          <template #image>
            <img class="relative mx-auto" width="490" src="/images/teilnahmeliste.png" alt=""/>
          </template>
        </block-features-image-right>

        <svg class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404"
             height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20"
                     patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"/>
        </svg>

        <block-features-image-left>
          <template #headline>
            <h4 class="text-2xl leading-8 font-extrabold text-blue-900 tracking-tight sm:text-3xl sm:leading-9">
              Flexibel und umfangreich
            </h4>
            <p class="mt-3 text-lg leading-7 text-gray-500">
              Mit der Datenbank für die Ferienpass-Angebote hört es nicht auf. <span
              class="text-blue-400">ferienpass</span><span
              class="text-tint">.</span><span
              class="text-blue-700">online</span> denkt weiter und bietet Ihnen notwendige
              Datei-Exportschnittstellen und aufschlussreiche Statistiken.
            </p>
          </template>

          <template #features>
            <ul class="mt-10">
              <li>
                <feature-horizontal title="Vielseite Export-Schnittstelle" icon-class="bg-blue-500">
                  Aus <span class="text-blue-400">ferienpass</span><span
                  class="text-tint">.</span><span class="text-blue-700">online</span> können
                  Sie die Angebote in vielseitige Datei-Exporte exportieren: Excel-Listen,
                  Kalenderabonnement, PDF und XML sind kein Problem.

                  <template #icon>
                    <icon-cloud-download class="h-6 w-6"></icon-cloud-download>
                  </template>
                </feature-horizontal>
              </li>
              <li class="mt-10">
                <feature-horizontal title="Druckfertige PDFs" icon-class="bg-blue-500">
                  <span class="text-blue-400">ferienpass</span><span
                  class="text-tint">.</span><span
                  class="text-blue-700">online</span> erstellt Ihnen druckfertige PDFs für Ihre Druckerei. Dabei
                  übernehmen wir Ihr Drucklayout, so, dass Sie auf Knopfdruck die Druckdateien exportieren können. Bei
                  mehr Flexibilität können die Angebote nach XML exportiert werden, das mit dem Layoutprogramm InDesign
                  kompatibel ist.
                  <a href="/blog/2020-03-drucklayouts" target="_blank"
                     class="mt-4 block font-medium text-gray-500 underline hover:no-underline">Weiterlesen im Blog: Wie
                    wir für den Alfelder Ferienpass den Layoutaufwand erneut reduziert haben</a>

                  <template #icon>
                    <icon-document-download class="h-6 w-6"></icon-document-download>
                  </template>
                </feature-horizontal>
              </li>
              <li class="mt-10">
                <feature-horizontal title="Schöne Statistiken" icon-class="bg-blue-500">
                  Mit <span class="text-blue-400">ferienpass</span><span
                  class="text-tint">.</span><span
                  class="text-blue-700">online</span> lernen Sie Ihren Ferienpass besser
                  kennen: Wie viele Kinder nahmen teil? Welche Altersgruppen sind am meisten
                  vertreten? Welche Angebote sind am beliebtesten? Wie ist die Auslastung der
                  Angebote?

                  <template #icon>
                    <icon-chart-pie class="h-6 w-6"></icon-chart-pie>
                  </template>
                </feature-horizontal>
              </li>
            </ul>
          </template>

          <template #image>
            <img class="relative mx-auto" width="490" src="/images/statistiken.png"
                 alt=""/>
          </template>
        </block-features-image-left>

      </div>
    </div>

    <block-features-offset-grid>
      <template #headline>
        <h3 class="text-3xl leading-9 font-extrabold tracking-tight text-blue-900 sm:text-4xl sm:leading-10">
          Und noch mehr…
        </h3>
      </template>
      <template #features>
        <feature-vertical title="Individualisierung und eigenes Design" icon-class="bg-blue-500">
          Der Ferienpass wird in enger Zusammenarbeit erstellt und kann komplett nach Ihren Bedürfnissen gestaltet
          werden, so, dass er Ihren Vorstellungen entspricht und zu Ihrem Gestaltungsbild passt.

          <template #icon>
            <icon-sparkles class="w-6 h-6"></icon-sparkles>
          </template>
        </feature-vertical>
        <feature-vertical title="Kauf und eigener Betrieb" icon-class="bg-blue-500" class="mt-10 sm:mt-0">
          Sie kaufen die Ferienpass-Software und haben keine laufenden Mietkosten. <span
          class="text-blue-400">ferienpass</span><span class="text-tint">.</span><span
          class="text-blue-700">online</span> wird auf Ihren Servern installiert. Somit können Sie
          Ihren Datenschutzmaßnahmen gerecht werden.

          <template #icon>
            <icon-adjustments class="w-6 h-6"></icon-adjustments>
          </template>
        </feature-vertical>
      </template>
    </block-features-offset-grid>

  </div>
</template>


<script>

  import FeatureHorizontal from "./FeatureHorizontal";
  import IconCalendar from "./IconCalendar";
  import IconScale from "./IconScale";
  import IconCloudDownload from "./IconCloudDownload";
  import IconDocumentDownload from "./IconDocumentDownload";
  import FeatureVertical from "./FeatureVertical";
  import IconSparkles from "./IconSparkles";
  import BlockFeaturesImageLeft from "./BlockFeaturesImageLeft";
  import BlockFeaturesImageRight from "./BlockFeaturesImageRight";
  import BlockHeadline from "./BlockHeadline";
  import BlockFeaturesOffsetGrid from "./BlockFeaturesOffsetGrid";
  import IconChartPie from "./IconChartPie";
  import IconAdjustments from "./IconAdjustments";

  export default {
    components: {
      IconAdjustments,
      IconChartPie,
      BlockFeaturesOffsetGrid,
      BlockHeadline,
      BlockFeaturesImageRight,
      BlockFeaturesImageLeft,
      IconSparkles,
      FeatureVertical,
      IconDocumentDownload,
      IconCloudDownload,
      IconScale,
      IconCalendar,
      FeatureHorizontal
    }
  }
</script>

