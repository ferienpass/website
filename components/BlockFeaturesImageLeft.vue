<template>
  <div class="relative mt-12 sm:mt-16 lg:mt-0">
    <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
      <div class="lg:col-start-2">
        <slot name="headline"></slot>
        <slot name="features"></slot>
      </div>

      <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
        <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784"
             height="404" fill="none" viewBox="0 0 784 404">
          <defs>
            <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20"
                     patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"/>
        </svg>

        <slot name="image"></slot>
      </div>
    </div>
  </div>
</template>


<script>

  export default {
    components: {}
  }
</script>

