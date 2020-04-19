<template>
  <button-base :href="href" class="text-white bg-blue-600 hover:bg-blue-500">
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

