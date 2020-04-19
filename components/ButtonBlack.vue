<template>
  <button-base :href="href" class="text-white bg-gray-900 hover:bg-gray-800">
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

