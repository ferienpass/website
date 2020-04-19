<template>
  <a href="#email"
     @click.prevent="sendMail">
    <slot>
      <span
        :data-mail1="emailChunks[0]"
        :data-mail2="emailChunks[1]"
        :data-mail3="emailChunks[2]"
      ></span>
    </slot>
  </a>
</template>


<script>

  export default {
    components: {},
    data: function () {
      return {
        emailChunks: [
          'info',
          'ferienpass',
          'online',
        ]
      }
    },
    methods: {
      sendMail: function () {
        window.location.href = 'mailto:' + this.emailChunks[0] + '@' + this.emailChunks[1] + '.' + this.emailChunks[2];
      }
    }
  }
</script>

<style scoped>
  a span:after {
    content: attr(data-mail1) "@" attr(data-mail2) "." attr(data-mail3);
  }
</style>
