<template>
  <button-base :href="href" :new-window="newWindow" class="text-blue-700 bg-blue-100 hover:text-blue-600 hover:bg-blue-50">
    <slot></slot>
  </button-base>
</template>


<script>
  import ButtonBase from "~/components/ButtonBase.vue"
  export default {
    props: ['href', 'new-window'],
    components: {
      ButtonBase
    }
  }
</script>

