<template>
  <div class="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
    <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <svg
        class="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
        width="404" height="404" fill="none" viewBox="0 0 404 404">
        <defs>
          <pattern id="ad119f34-7694-4c31-947f-5c9d249b21f3" x="0" y="0" width="20" height="20"
                   patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"/>
      </svg>

      <div class="relative">
        <div class="text-center">
          <customer-logo src="/images/luebeck-logo.svg" alt="Hansestadt Lübeck"></customer-logo>
        </div>
        <blockquote class="mt-8">
          <div class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
            <p>
              &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa
              sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.&rdquo;
            </p>
          </div>
          <footer class="mt-8">
            <div class="md:flex md:items-center md:justify-center">
              <div class="text-base leading-6 font-medium text-gray-900">Pito Bernet</div>

              <svg class="hidden md:block mx-1 h-5 w-5 text-blue-500" fill="currentColor"
                   viewBox="0 0 20 20">
                <path d="M11 0h3L9 20H6l5-20z"/>
              </svg>

              <div class="text-base leading-6 font-medium text-gray-500">Geschäftsführer Lübecker Jugendring
                e.V.
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</template>


<script>

  import CustomerLogo from "./CustomerLogo";
  export default {
    components: {
      CustomerLogo
    }
  }
</script>

