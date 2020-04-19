<template>
      <img class="logo inline-block max-h-12" :src="src" :alt="alt" >
</template>

<script>
  export default {
    props: ['src', 'alt']
  }
</script>

<style lang="scss" scoped>
  .logo {
    filter: grayscale(1) opacity(.6);
    transition: all 0.5s;

    &:hover {
    filter: none;
    }
  }
</style>
