<template>
  <div class="flex">
    <div class="flex-shrink-0">
      <div class="flex items-center justify-center h-12 w-12 rounded-md text-white" :class="iconClass">
        <slot name="icon"></slot>
      </div>
    </div>
    <div class="ml-4">
      <h5 class="text-lg leading-6 font-medium text-gray-900">
        {{ title }}
      </h5>
      <p class="mt-2 text-base leading-6 text-gray-500">
        <slot></slot>
      </p>
    </div>
  </div>
</template>


<script>

  export default {
    props: {
      title: String,
      iconClass: String
    },
  }
</script>

<style scoped>
  p {
    hyphens: auto;
  }
</style>
