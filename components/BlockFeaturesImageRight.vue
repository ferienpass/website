<template>


  <div class="relative mt-12 lg:mt-0 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
    <div class="relative">
      <slot name="headline"></slot>
      <slot name="features"></slot>
    </div>

    <div class="mt-10 -mx-4 relative lg:mt-0">
      <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784"
           height="404" fill="none" viewBox="0 0 784 404">
        <defs>
          <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20"
                   patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
          </pattern>
        </defs>
        <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"/>
      </svg>
      <slot name="image"></slot>
    </div>
  </div>
</template>


<script>

  export default {
    components: {}
  }
</script>

