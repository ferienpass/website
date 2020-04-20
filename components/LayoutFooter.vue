<template>
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
        <ul>
          <li v-for="navigationItem in navigation" class="inline-block px-5 py-2">
            <strong v-if="navigationItem.isActive" class="text-base leading-6 font-normal text-gray-700">
              {{ navigationItem.link }}
            </strong>
            <a v-else :href="navigationItem.href"
               class="text-base leading-6 font-normal text-gray-500 hover:text-gray-900">
              {{ navigationItem.link }}
            </a>
          </li>
        </ul>
      </nav>
      <div class="mt-8 flex justify-center">
        <link-email class="ml-6 text-gray-400 hover:text-gray-500">
          <span class="sr-only">E-Mail schreiben</span>
          <icon-email class="w-6 h-6"></icon-email>
        </link-email>
        <a href="https://github.com/ferienpass/" target="_blank" class="ml-6 text-gray-400 hover:text-gray-500">
          <span class="sr-only">GitHub</span>
          <icon-github class="w-6 h-6"></icon-github>
        </a>
      </div>
    </div>
  </div>
</template>


<script>
  import LinkEmail from "./LinkEmail";
  import IconEmail from "./IconEmail";
  import IconGithub from "./IconGithub";

  export default {
    components: {IconGithub, IconEmail, LinkEmail},
    data() {
      return {
        navigation: [
          {
            href: '/',
            isActive: '/' === this.$route.path,
            link: 'Startseite'
          },
          {
            href: '/impressum',
            isActive: '/impressum' === this.$route.path,
            link: 'Impressum'
          },
          {
            href: '/datenschutz',
            isActive: '/datenschutz' === this.$route.path,
            link: 'Datenschutz'
          },
        ],
      }
    }
  }
</script>
