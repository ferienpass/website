<template>
  <blog-reader :post-id="postId"></blog-reader>
</template>

<script>
  import BlogReader from "../../components/BlogReader";
  export default {
    components: {BlogReader},
    data() {
      return {
        postId: this.$route.path.replace('/blog/', '')
      }
    }
  };
</script>
