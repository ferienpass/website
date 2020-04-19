<script>
  export default {
    name: 'BlogItemRenderless',
    props: {
      id: String
    },
    data() {
      return {
        attributes: {},
        blogArticle: null
      }
    },
    created() {
      const markdown = require(`~/blog/${this.id}.md`);

      this.attributes = markdown.attributes;
      this.blogArticle = markdown.vue.component;
    },
    render() {
      return this.$scopedSlots.default({
        attributes: this.attributes,
        blogArticle: this.blogArticle,
      })
    },
  }
</script>
