<template>
  <div class="inline-flex rounded-md shadow">
    <div :href="href"
         class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
      <a v-if="href" :href="href" :target="target" class="block">
        <slot></slot>
      </a>
      <span v-else class="block">
      <slot></slot>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['href', 'new-window'],
    data: function () {
      return {
        target: this.newWindow ? '_blank' : '',
      }
    },
    components: {}
  }
</script>
