<template>
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto text-center">
      <p class="text-base leading-6 text-blue-600 font-semibold tracking-wide uppercase">
        <slot name="mustache"></slot>
      </p>
      <h2 class="text-3xl leading-9 font-extrabold text-blue-900 sm:text-4xl sm:leading-10">
        <slot></slot>
      </h2>
      <p class="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
        <slot name="teaser"></slot>
      </p>
    </div>
  </div>
</template>


<script>

  export default {
    components: {}
  }
</script>

<style scoped>
  h2, p {
    hyphens: manual;
  }
</style>
