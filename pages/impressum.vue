<template>
  <div class="relative bg-white">
      <div class="absolute inset-0">
        <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
      </div>
      <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div class="max-w-lg mx-auto">
            <h2 class="text-2xl leading-8 font-bold tracking-tight text-gray-900">
              Impressum:
            </h2>
            <p class="mt-3 text-lg leading-6 text-gray-500">
              Richard Henkenjohann
            </p>
            <dl class="mt-3 text-base leading-6 text-gray-500">
              <div>
                <dt class="sr-only">Anschrift</dt>
                <dd>
                  <p>Heidegrunder Str. 3</p>
                  <p>31061 Alfeld</p>
                </dd>
                <dt class="inline">USt-ID:</dt>
                <dd class="inline">DE297765265</dd>
              </div>
              <div class="mt-6">
                <dt class="sr-only">Telefonnummer</dt>
                <dd class="flex">
                  <svg class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none" stroke="currentColor"
                       stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                    <path
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span class="ml-3">0172 4951293</span>
                </dd>
              </div>
              <div class="mt-3">
                <dt class="sr-only">Email-Adresse</dt>
                <dd class="flex">
                  <svg class="flex-shrink-0 h-6 w-6 text-gray-400" stroke="currentColor" fill="none"
                       viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <link-email class="ml-3 hover:underline"></link-email>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div class="max-w-lg mx-auto lg:max-w-none">

            <h3 class="text-base font-semibold tracking-tight text-gray-900">Urheberrecht</h3>
            <div class="text-sm mb-4 leading-5 text-gray-500">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
                auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>

            <h3 class="text-base font-semibold tracking-tight text-gray-900">Datenschutz</h3>
            <div class="text-sm leading-5 text-gray-500">
              <p class="mb-2">
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf
                unseren Seiten personenbezogene Daten (beispielsweise Name, oder eMail-Adressen) erhoben werden, erfolgt
                dies, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an
                Dritte weitergegeben.
              </p>

              <p>
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur
                Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit
                ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
                Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import BlockHeadline from "../components/BlockHeadline";
  import LinkEmail from "../components/LinkEmail";

  export default {
    components: {LinkEmail, BlockHeadline},
    head () {
      return {
        meta: [
          { hid: 'robots', name: 'robots', content: 'noindex,follow' }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
