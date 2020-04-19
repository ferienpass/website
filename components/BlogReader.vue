<template>
  <blog-item-renderless :id="postId">
    <template #default="{ attributes, blogArticle }">
      <div class="blog-reader">

        <div class="blog-reader__header h-56">
          <img :src="attributes.image" alt="" class="h-full w-full object-cover mx-auto">
        </div>

        <div class="bg-white pt-16 pb-12 px-4 sm:px-6 lg:pt-24 lg:px-8">
          <div class="relative max-w-lg mx-auto lg:max-w-3xl">
            <div>
              <h2 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                {{ attributes.title }}
              </h2>
              <p class="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
                {{ attributes.teaser }}
              </p>

              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <img class="h-10 w-10 rounded-full"
                       :src="attributes.author.avatar"
                       alt="">
                </div>
                <div class="ml-3">
                  <p class="text-sm leading-5 font-medium text-gray-900">
                    {{ attributes.author.name }}
                  </p>
                  <div class="flex text-sm leading-5 text-gray-500">
                    <time :datetime="attributes.date">
                      am {{ attributes.date | formatDate }}
                    </time>
                  </div>
                </div>
              </div>
            </div>

            <hr class="mt-10 mb-10">

            <component :is="blogArticle"></component>

          </div>
        </div>
      </div>

    </template>
  </blog-item-renderless>
</template>


<script>
  import BlogItemRenderless from "./BlogItemRenderless"

  import Prism from 'prismjs'
  import 'prismjs/themes/prism.css'

  import moment from 'moment'
  import 'moment/locale/de'

  moment.locale('de');

  export default {
    props: ['postId'],
    components: {BlogItemRenderless},
    data() {
      return {}
    },
    mounted() {
      Prism.highlightAll();
    },
    filters: {
      formatDate: function (value) {
        if (value) {
          return moment(String(value)).format('LL')
        }
      }
    }
  }
</script>


<style lang="scss">
  .blog-reader {
    &__header {
      @screen sm {
        height: 20rem
      }
      @screen md {
        height: 30rem
      }

      img {
        max-width: 2000px;
      }
    }
  }

  .markdown-body {
    hyphens: auto;

    h2 {
      @apply text-2xl leading-8 font-bold tracking-tight text-gray-900 mb-2;

      &:not(:first-child) {
        @apply mt-10;
      }
    }

    h3 {
      @apply text-lg font-medium tracking-tight text-gray-900 mt-2 leading-5 mb-1;

      &:not(:first-child) {
        @apply mt-2;
      }
    }

    p {
      @apply text-gray-500;

      & + p {
        @apply mt-3;
      }
    }

    img {
      @apply mt-8 mb-8;
    }

    p + pre, pre + p {
      @apply mt-8;
    }

    p > a:first-child:last-child {
      @apply mt-4 mb-4 inline-block px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md shadow transition duration-150 ease-in-out text-blue-700 bg-blue-100;

      &:hover {
        @apply text-blue-600 bg-blue-50;
      }

      &:focus {
        @apply outline-none shadow-outline;
      }
    }
  }
</style>
