<template>
  <section
    class="relative h-screen flex items-center justify-center overflow-hidden bg-navy"
    @mouseenter="stopAutoSlide"
    @mouseleave="startAutoSlide"
  >
    <!-- Slide Background -->
    <transition name="hero-fade" mode="out-in">
      <div :key="activeSlide.id" class="absolute inset-0 bg-navy">
        <img :src="activeSlide.image" :alt="activeSlide.alt" class="w-full h-full object-cover object-center" />
        <div class="absolute inset-0 bg-gradient-to-br from-navy/60 via-navy/35 to-black/25"></div>
      </div>
    </transition>

    <!-- Navigation Arrows -->
    <button
      type="button"
      class="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 backdrop-blur-sm transition"
      @click="prevSlide"
      aria-label="Previous slide"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      type="button"
      class="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 backdrop-blur-sm transition"
      @click="nextSlide"
      aria-label="Next slide"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Hero Content -->
    <div class="relative z-10 text-center text-white px-6 max-w-4xl mx-auto" data-aos="fade-up">
      <transition name="hero-fade" mode="out-in">
        <div :key="activeSlide.id" class="space-y-6">
          <div v-if="activeSlide.badge" class="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm tracking-wide uppercase">
            <span class="h-2 w-2 rounded-full bg-muted-red"></span>
            {{ activeSlide.badge }}
          </div>
          <h1 class="text-4xl md:text-7xl font-bold leading-tight">
            {{ activeSlide.title }}
          </h1>
          <p v-if="activeSlide.subtitle" class="text-lg md:text-2xl italic text-gray-200">
            "{{ activeSlide.subtitle }}"
          </p>
          <p class="text-base md:text-xl text-gray-200 max-w-2xl mx-auto">
            {{ activeSlide.description }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <router-link
              v-if="activeSlide.primaryCta"
              :to="activeSlide.primaryCta.to"
              class="btn-primary px-8"
            >
              {{ activeSlide.primaryCta.label }}
            </router-link>
            <router-link
              v-if="activeSlide.secondaryCta"
              :to="activeSlide.secondaryCta.to"
              class="btn-secondary px-8"
            >
              {{ activeSlide.secondaryCta.label }}
            </router-link>
          </div>
        </div>
      </transition>

      <!-- Slide Indicators -->
      <div class="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <button
          v-for="(slide, index) in slides"
          :key="slide.id"
          type="button"
          class="w-3 h-3 rounded-full transition"
          :class="currentSlide === index ? 'bg-white' : 'bg-white/40 hover:bg-white/70'"
          @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  motto: {
    type: String,
    default: 'Determination and Perseverance'
  },
  tagline: {
    type: String,
    default: 'Shaping minds for a brighter tomorrow'
  }
})

const slides = [
  {
    id: 1,
    title: 'PRESEC, Berekum',
    subtitle: props.motto,
    description: props.tagline,
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80',
    alt: 'Students walking on a modern high school campus',
    badge: 'Academic Excellence',
    primaryCta: { label: 'Discover Our Story', to: '/about' },
    secondaryCta: { label: 'Apply Now', to: '/admissions' }
  },
  {
    id: 2,
    title: 'Inspiring STEM Innovation',
    subtitle: 'Hands-on learning for tomorrow\'s leaders',
    description: 'World-class laboratories, robotics clubs, and mentorship programs empower students to explore science and technology with curiosity and confidence.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80',
    alt: 'Students collaborating with educational technology in a lab',
    badge: 'STEM Leadership',
    primaryCta: { label: 'Explore Academics', to: '/academics' },
    secondaryCta: { label: 'View Facilities', to: '/gallery' }
  },
  {
    id: 3,
    title: 'Holistic Student Development',
    subtitle: 'Discipline, integrity, and service',
    description: 'Our vibrant co-curricular activities—from debate and sports to music and community outreach—build character and lifelong friendships.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80',
    alt: 'Students engaged in a spirited sports activity on campus',
    badge: 'Beyond the Classroom',
    primaryCta: { label: 'See Student Life', to: '/news' },
    secondaryCta: { label: 'Join a Club', to: '/contact' }
  },
  {
    id: 4,
    title: 'Global Alumni Network',
    subtitle: 'Leaders grounded in faith and excellence',
    description: 'Our accomplished alumni mentor current students and create opportunities across Ghana and the global community.',
    image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=1600&q=80',
    alt: 'Graduates celebrating together outdoors',
    badge: 'Legacy of Impact',
    primaryCta: { label: 'Meet Our Alumni', to: '/about' },
    secondaryCta: { label: 'Support PRESEC', to: '/contact' }
  }
]

const currentSlide = ref(0)
const intervalId = ref(null)
const slideCount = slides.length

const activeSlide = computed(() => slides[currentSlide.value])

const goToSlide = (index) => {
  currentSlide.value = (index + slideCount) % slideCount
  restartAutoSlide()
}

const nextSlide = () => {
  goToSlide(currentSlide.value + 1)
}

const prevSlide = () => {
  goToSlide(currentSlide.value - 1)
}

const stopAutoSlide = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value)
    intervalId.value = null
  }
}

const startAutoSlide = () => {
  if (!intervalId.value) {
    intervalId.value = window.setInterval(nextSlide, 3000)
  }
}

const restartAutoSlide = () => {
  stopAutoSlide()
  startAutoSlide()
}

onMounted(() => {
  // Preload slide imagery to avoid flicker when transitioning
  slides.forEach((slide) => {
    const img = new Image()
    img.src = slide.image
  })
  startAutoSlide()
})

onBeforeUnmount(() => {
  stopAutoSlide()
})
</script>

<style scoped>
.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 0.8s ease;
}

.hero-fade-enter-from,
.hero-fade-leave-to {
  opacity: 0;
}

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
