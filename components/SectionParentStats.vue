<template>
  <div class="bg-gray-50 pt-12 sm:pt-24">

    <block-headline>
      Von den Nutzer*innen bestätigt
      <template #teaser>
        2016, unmittelbar nach der Einführung des Online-Ferienpasses in Alfeld, wurde unter den Eltern eine Umfrage
        durchgeführt. Die Bereitschaft war groß, so haben 81 Eltern an der anonymen Umfrage teilgenommen.
      </template>
    </block-headline>

    <div class="mt-10 pb-12 bg-white sm:pb-16">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-gray-50"></div>
        <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto">
            <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
              <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500" id="item-1">
                  haben das Online-System gerne verwendet
                </dt>
                <dd class="order-1 text-5xl leading-none font-extrabold text-blue-600"
                    aria-describedby="item-1">
                  97&nbsp;%
                </dd>
              </div>
              <div
                class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  empfanden den Ferienpass als verständlich aufgebaut
                </dt>
                <dd class="order-1 text-5xl leading-none font-extrabold text-blue-600">
                  91&nbsp;%
                </dd>
              </div>
              <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  sagen: alle Veranstaltungen sollen das Online-Anmeldesystem verwenden
                </dt>
                <dd class="order-1 text-5xl leading-none font-extrabold text-blue-600">
                  81&nbsp;%
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import BlockHeadline from "./BlockHeadline";

  export default {
    components: {
      BlockHeadline
    }
  }
</script>

