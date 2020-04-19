<template>
  <header class="fixed w-full z-20 transition duration-100 ease-in-out"
          :class="{ 'bg-white border-b border-gray-100': headerWhite }">

    <div class="relative py-2 px-4 sm:px-6 sm:py-4 lg:px-8">
      <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start">
        <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <a href="/#">
              <img class="h-8 w-auto sm:h-10" src="/images/ferienpass-logo.svg" alt=""/>
            </a>
            <div class="-mr-2 flex items-center md:hidden">
              <button type="button"
                      @click="menuOpen = !menuOpen"
                      class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <ul class="hidden md:block md:ml-10 md:pr-4">
          <li v-for="navigationItem in navigation" class="mr-8 inline-block">
            <strong v-if="navigationItem.isActive" class="font-medium text-blue-900">
              {{ navigationItem.link }}
            </strong>
            <a v-else :href="navigationItem.href"
               class="font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">
              {{ navigationItem.link }}
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <transition
      enter-active-class="duration-150 ease-out"
      enter-class="scale-95"
      enter-to-class="scale-100"
      leave-active-class="duration-100 ease-in"
      leave-class="scale-100"
      leave-to-class="scale-95"
    >
      <div v-show="menuOpen" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-md">
          <div class="rounded-lg bg-white shadow-xs overflow-hidden">
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="/images/ferienpass-logo.svg" alt=""/>
              </div>
              <div class="-mr-2">
                <button type="button"
                        @click="menuOpen = false"
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                  <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </div>


            <ul class="px-2 pt-2 pb-3">
              <li v-for="navigationItem in navigation" class="">
                <strong v-if="navigationItem.isActive"
                        class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-900">
                  {{ navigationItem.link }}
                </strong>
                <a v-else :href="navigationItem.href"
                   class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">
                  {{ navigationItem.link }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>

  </header>
</template>


<script>

  export default {
    data: function () {
      return {
        menuOpen: false,
        headerWhite: '/' !== this.$route.path,
        navigation: [
          {
            href: '/#funktionen',
            isActive: '/blog' === this.$route.path,
            link: 'Funktionen'
          },
          {
            href: '/#feedback',
            isActive: '/blog' === this.$route.path,
            link: 'Feedback'
          },
          {
            href: '/#preisgestaltung',
            isActive: '/blog' === this.$route.path,
            link: 'Preisgestaltung'
          },
          {
            href: '/#blog',
            isActive: '/blog' === this.$route.path,
            link: 'Blog'
          },
        ],
      }
    },
    methods: {
      handleScroll() {
        if ('/' === this.$route.path) {
          this.headerWhite = window.scrollY > 0;
        }
      }
    },
    mounted() {
      this.handleScroll();
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    components: {}
  }
</script>

<style>
  html {
    scroll-behavior: smooth;
  }
</style>
