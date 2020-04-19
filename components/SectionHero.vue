<template>
  <div class="relative bg-white overflow-hidden -mt-16">
    <div class="max-w-screen-xl mx-auto ">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
             fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,0 100,0 50,100 0,100"/>
        </svg>


        <div class="pt-20 mx-auto max-w-screen-xl px-4 sm:pt-28 sm:px-6 lg:px-8 xl:pt-32">
          <div class="sm:text-center lg:text-left">
            <h2
              class="text-4xl tracking-tight leading-10 font-extrabold text-blue-700 sm:text-5xl sm:leading-none md:text-5xl">
              <span class="text-blue-400">Ferienpass</span>-Software <br class="xl:hidden"><span class="">mit Online-Anmeldesystem</span>
            </h2>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-10 md:text-xl lg:mx-0">
              <span class="text-blue-400">ferienpass</span><span class="text-tint">.</span><span
              class="text-blue-700">online</span> ist die Ferienpass-Software für Gemeinden, die ein
              Freizeitprogramm für Kinder anbieten. Die Ferienpass-Software ist ein Online-Katalog von
              Freizeitangeboten und bietet Eltern wie Veranstalter*innen eine intuitive Benutzeroberfäche.
            </p>
            <div class="mt-5 sm:mt-12 sm:flex sm:justify-center lg:justify-start">
              <button-blue href="#funktionen">
                <span class="text-lg px-4 py-1">Mehr erfahren</span>
              </button-blue>
              <button-light class="mt-3 sm:mt-0 sm:ml-3" href="https://demo.ferienpass.online/" new-window>
                <span class="text-lg px-4 py-1">Online-Demo</span>
              </button-light>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
           src="/images/janko-ferlic-zHJ4ph3GRyg-unsplash.jpg" alt=""/>
    </div>
  </div>
</template>


<script>

  import ButtonBlue from "./ButtonBlue";
  import ButtonLight from "./ButtonLight";
  export default {
    components: {
      ButtonLight,
      ButtonBlue
    }
  }
</script>

