<template>
  <nav class="bg-navy text-white shadow-lg sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo and School Name -->
        <div class="flex items-center space-x-3">
          <div class="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
            <img :src="logo" alt="PRESEC Berekum crest" class="w-12 h-12 object-contain" />
          </div>
          <div>
            <h1 class="text-xl font-bold">PRESEC, Berekum</h1>
            <p class="text-xs text-gray-300 italic">Determination and Perseverance</p>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-6">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            class="hover:text-muted-red transition-colors duration-300 font-medium"
            active-class="text-muted-red"
          >
            {{ link.name }}
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden focus:outline-none"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <transition name="slide">
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            @click="closeMobileMenu"
            class="block py-2 hover:text-muted-red transition-colors duration-300"
            active-class="text-muted-red"
          >
            {{ link.name }}
          </router-link>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import logo from '@/assets/presec-logo.svg'

const mobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' }
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
