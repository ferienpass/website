<template>
  <blog-item-renderless :id="postId">
    <template #default="{ attributes }">
      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover"
               :src="attributes.image"
               alt=""/>
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <p class="text-sm leading-5 text-blue-600 font-semibold tracking-wide uppercase">
              <span v-for="tag in attributes.tags">{{ tag }}</span>
            </p>
            <a :href="href" class="block">
              <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                {{ attributes.title }}
              </h3>
              <p class="mt-3 text-base leading-6 text-gray-500">
                {{ attributes.teaser }}
              </p>
            </a>
          </div>
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
                  {{ attributes.date | formatDate }}
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </blog-item-renderless>
</template>


<script>
  import moment from 'moment';
  import 'moment/locale/de';
  import BlogItemRenderless from "./BlogItemRenderless";

  moment.locale('de');

  export default {
    props: ['postId'],
    components: {BlogItemRenderless},
    data() {
      return {
        href: `/blog/${this.postId}`
      }
    },
    filters: {
      formatDate: function (value) {
        if (value) {
          return moment(String(value)).format('LL')
        }
      }
    },
    methods: {}
  }
</script>

<style scoped>
  p {
    hyphens: auto;
  }
</style>
