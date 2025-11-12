<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-navy via-navy to-blue-900">
      <div class="absolute inset-0 bg-black opacity-40"></div>
      <!-- Placeholder for background image -->
      <div class="absolute inset-0 flex items-center justify-center opacity-10">
        <svg class="w-96 h-96" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
        </svg>
      </div>
    </div>

    <!-- Hero Content -->
    <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto" data-aos="fade-up">
      <h1 class="text-5xl md:text-7xl font-bold mb-4">
        PRESEC, Berekum
      </h1>
      <p class="text-xl md:text-2xl mb-2 italic text-gray-200">
        "{{ motto }}"
      </p>
      <p class="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
        {{ tagline }}
      </p>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <router-link 
          to="/about"
          class="bg-muted-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Learn More
        </router-link>
        <router-link 
          to="/admissions"
          class="bg-white text-navy hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Apply Now
        </router-link>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  motto: {
    type: String,
    default: 'Determination and Perseverance'
  },
  tagline: {
    type: String,
    default: 'Shaping minds for a brighter tomorrow'
  }
})
</script>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  50% {
    transform: translateY(-10px) translateX(-50%);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>
