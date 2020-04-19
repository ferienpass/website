<template>
  <button-base :href="href" class="text-gray-900 bg-white hover:text-gray-600">
    <slot></slot>
  </button-base>
</template>


<script>
  import ButtonBase from "~/components/ButtonBase.vue"
  export default {
    props: ['href'],
    components: {
      ButtonBase
    }
  }
</script>

