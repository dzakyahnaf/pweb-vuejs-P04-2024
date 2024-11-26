<template>
  <nav class="bg-gray-800 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="text-xl font-bold text-white"> MyBrand </router-link>
        </div>
        <div class="hidden md:flex space-x-4">
          <router-link to="/" class="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Book
          </router-link>
          <router-link
            to="/create"
            class="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Create
          </router-link>
        </div>
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            ☰
          </button>
        </div>
      </div>
    </div>
    <div v-if="isMenuOpen" class="md:hidden bg-gray-700 text-white px-4 py-3 space-y-2">
      <router-link to="/" class="block hover:bg-gray-600 px-3 py-2 rounded-md"> Book </router-link>
      <router-link to="/create" class="block hover:bg-gray-600 px-3 py-2 rounded-md">
        Create
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppNavbar',
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
})
</script>

<style>
/* Tambahkan gaya tambahan jika diperlukan */
</style>
