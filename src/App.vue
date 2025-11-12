<template>
  <div id="app">
    <Navbar />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

// Initialize AOS animations
onMounted(() => {
  if (typeof window !== 'undefined') {
    import('aos').then((AOS) => {
      AOS.default.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
      })
    })
  }
})
</script>

<style>
/* Page transition animations */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Remove default margins */
body {
  margin: 0;
  padding: 0;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
