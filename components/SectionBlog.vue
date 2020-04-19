<template>
  <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative max-w-7xl mx-auto">
      <block-headline>
        Aus dem Blog

        <template #teaser>
          Hier berichten wir über neue Funktionen und Wissenswertes aus der Praxis.
        </template>
      </block-headline>

      <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        <blog-item post-id="2020-04-corona"></blog-item>
        <blog-item post-id="2020-03-drucklayouts"></blog-item>
        <blog-item post-id="2020-02-about"></blog-item>
      </div>
    </div>
  </div>
</template>


<script>
  import BlockHeadline from "./BlockHeadline";
  import BlogItem from "./BlogItem";

  export default {
    components: {
      BlogItem,
      BlockHeadline
    }
  }
</script>

