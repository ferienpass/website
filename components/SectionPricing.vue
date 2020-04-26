<template>
  <div class="bg-gray-100 pt-24">
    <block-headline>
      Kaufen und selbst betreiben
      <template #teaser>
        In enger Zusammenarbeit erarbeiten wir eine Ferienpass-Lösung, die zu Ihnen passt.
      </template>
    </block-headline>
    <div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-gray-100"></div>
        <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
            <div class="bg-white px-6 py-8 lg:flex-shrink-1 lg:p-12">
              <h3 class="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">
                Kauf der Software
              </h3>
              <p class="mt-6 text-base leading-6 text-gray-500">
                In enger Zusammenarbeit entwickeln wir die Ferienpass-Software, die zu Ihnen passt. Die
                Ferienpass-Software wird einmalig gekauft und auf Ihren Servern installiert. Dadurch ist eine nahtlose
                Integration in Ihre Infrastruktur und Abläufe möglich.
              </p>
              <div class="mt-8">
                <div class="flex items-center">
                  <h4
                    class="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-blue-600">
                    Das ist dabei:
                  </h4>
                  <div class="flex-1 border-t-2 border-gray-200"></div>
                </div>
                <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                  <li class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <p class="ml-3 text-sm leading-5 text-gray-700">
                      Online-Portal für Verwaltung, Veranstalter*innen und Eltern mit sämtlichen Funktionen
                    </p>
                  </li>
                  <li class="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                    <div class="flex-shrink-0">
                      <svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <p class="ml-3 text-sm leading-5 text-gray-700">
                      Durchführung von Gruppendiskussionen und Schulung-Workshops
                    </p>
                  </li>
                  <li class="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                    <div class="flex-shrink-0">
                      <svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <p class="ml-3 text-sm leading-5 text-gray-700">
                      Datenschutzkonformes Hosting in Ihrer Server-Infrastruktur
                    </p>
                  </li>
                  <li class="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                    <div class="flex-shrink-0">
                      <svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <p class="ml-3 text-sm leading-5 text-gray-700">
                      Zukünftige Updates und enge Zusammenarbeit und Wartungsvertrag
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
              <p class="text-lg leading-6 font-medium text-gray-900">
                Einmaliger Kauf
              </p>
              <div class="mt-4 flex items-center justify-center text-2xl leading-none font-extrabold text-gray-900">
                <span>Angebot auf Anfrage</span>
              </div>
              <div class="mt-6">
                <link-email>
                  <button-black>
                    <icon-email class="mr-2 h-6 w-6 inline"></icon-email>
                    Ferienpass anfragen
                  </button-black>
                </link-email>
                <div class="rounded-md shadow">
                </div>
              </div>
              <div class="mt-4 text-sm leading-5">
                <a href="https://demo.ferienpass.online/" target="_blank"
                   class="font-medium text-gray-500 underline">
                  Demo ansehen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

  import BlockHeadline from "./BlockHeadline";
  import LinkEmail from "./LinkEmail";
  import IconEmail from "./IconEmail";
  import ButtonBlue from "./ButtonBlue";
  import ButtonBlack from "./ButtonBlack";

  export default {
    components: {
      ButtonBlack,
      ButtonBlue,
      IconEmail,
      LinkEmail,
      BlockHeadline
    }
  }
</script>

