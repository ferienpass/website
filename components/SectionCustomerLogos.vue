<template>
  <div class="bg-white mt-24 mb-24">
    <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <p class="text-center text-base leading-6 font-semibold uppercase text-gray-600 tracking-wider">
        Bei anspruchsvollen Kunden im&nbsp;Einsatz
      </p>
      <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
        <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <customer-logo src="/images/alfeld-logo.svg" alt="Stadt Alfeld (Leine)"></customer-logo>
        </div>
        <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <customer-logo src="/images/luebeck-logo.svg" alt="Hansestadt Lübeck"></customer-logo>
        </div>
        <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <customer-logo src="/images/badoldesloe-logo.svg" alt="Stadt Bad Oldesloe"></customer-logo>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import CustomerLogo from '~/components/CustomerLogo.vue'

  export default {
    components: {
      CustomerLogo
    }
  }
</script>

