<template>
  <div class="relative bg-gray-800">
    <div class="h-56 bg-blue-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
      <img class="w-full h-full object-right object-cover" src="/images/richard.jpg" alt=""/>
    </div>
    <div class="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <div class="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300">
          Richard Henkenjohann
        </div>
        <h2 class="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
          In eigener Sache
        </h2>
        <div class="mt-3 text-gray-300">
          <p class="mb-2">
            2014 habe ich mein Freiwilliges Soziales Jahr bei der
            Jugendpflege der Stadt Alfeld gemacht und erlebt, welch großer Aufwand hinter einem
            Ferienpass-Programm steckt.
          </p>
          <p class="mb-2">
            Schon 2015 konnte ich ein Portal schaffen, in denen die Veranstalter*innen ihre Angebote selbst
            einpflegen. 2016 konnten wir den Ferienpass ergänzen und nun liefen Anmeldungen zu den
            Angeboten online.
          </p>
          <p>
            Seit 2015 bin ich im Vorstand des <a class="hover:underline" href="https://www.sjralfeld.de/"
                                                 target="_blank">Stadtjugendring Alfeld e.V.</a> Wir sind ein
            Dachverband von über 45 Vereinen und Institutionen, die alle Jugendarbeit machen. Ich kenne die Bedürfnisse
            aller am Ferienpass beteiligten Personen.
          </p>
        </div>
        <div class="mt-8">
          <div class="inline-flex rounded-md shadow">
            <button-white href="/blog/2020-02-about">Lesen Sie die Story im Blog</button-white>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

  import ButtonWhite from "./ButtonWhite";

  export default {
    components: {ButtonWhite}
  }
</script>

