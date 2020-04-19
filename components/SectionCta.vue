<template>
  <div class="bg-white">
    <div class="max-w-screen-md mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <block-headline>
        Sie wollen Ihren Ferienpass ins digitale Zeitalter heben?
      </block-headline>
      <div class="mt-8 flex justify-center">

        <link-email>
          <button-blue>
            <icon-email class="w-6 h-6 mr-2 inline"></icon-email>
            Ferienpass anfragen
          </button-blue>
        </link-email>

        <button-light href="https://demo.ferienpass.online/" class="ml-3">
            Online-Demo aufrufen
        </button-light>
      </div>
    </div>
  </div>
</template>


<script>

  import ButtonBlue from "./ButtonBlue";
  import ButtonLight from "./ButtonLight";
  import BlockHeadline from "./BlockHeadline";
  import LinkEmail from "./LinkEmail";
  import IconEmail from "./IconEmail";
  export default {
    components: {
      IconEmail,
      LinkEmail,
      BlockHeadline,
      ButtonLight,
      ButtonBlue
    }
  }
</script>

