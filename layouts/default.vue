<template>
  <div>
    <layout-header></layout-header>
    <nuxt class="pt-12 md:pt-16"></nuxt>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
  import LayoutFooter from "../components/LayoutFooter";
  import LayoutHeader from "../components/LayoutHeader";
  export default {
    components: {LayoutHeader, LayoutFooter},
  }
</script>
