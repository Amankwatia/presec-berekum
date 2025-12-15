<template>
  <nav class="sticky top-0 z-50 border-b border-navy/10 bg-white/95 backdrop-blur">
    <div class="container mx-auto flex items-center justify-between px-4 py-3 text-navy">
      <!-- Logo and School Name -->
      <router-link to="/" class="flex items-center gap-3">
        <div class="flex h-12 w-12 items-center justify-center rounded-full border border-navy/10 bg-white"> 
          <img :src="logo" alt="PRESEC Berekum crest" class="h-9 w-9 object-contain" />
        </div>
        <div>
          <h1 class="text-lg font-semibold tracking-wide">PRESEC, Berekum</h1>
          <p class="text-xs text-navy/60">Determination & Perseverance</p>
        </div>
      </router-link>

      <!-- Desktop Navigation -->
      <div class="hidden items-center gap-2 md:flex">
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="rounded-full px-4 py-2 text-sm font-medium text-navy/70 transition-colors duration-200 hover:text-navy"
          active-class="bg-navy/5 text-navy"
        >
          {{ link.name }}
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMobileMenu"
        class="md:hidden text-navy focus:outline-none"
      >
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <transition name="slide">
      <div v-if="mobileMenuOpen" class="border-t border-navy/10 bg-white md:hidden">
        <div class="container mx-auto px-4 py-3">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="closeMobileMenu"
            class="block rounded-full px-4 py-2 text-sm font-medium text-navy/70 transition-colors duration-200 hover:bg-navy/5 hover:text-navy"
            active-class="bg-navy/5 text-navy"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </transition>
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
