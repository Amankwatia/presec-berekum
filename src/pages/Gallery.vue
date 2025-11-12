<template>
  <div class="gallery">
    <!-- Page Header -->
    <section class="bg-navy text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-4" data-aos="fade-down">Gallery</h1>
        <p class="text-xl text-gray-300" data-aos="fade-up">Moments That Define Us</p>
      </div>
    </section>

    <!-- Filter Buttons -->
    <section class="py-8 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-2 rounded-full font-semibold transition-all duration-300',
              selectedCategory === category
                ? 'bg-muted-red text-white'
                : 'bg-white text-navy hover:bg-gray-100'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Photo Grid -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(photo, index) in filteredPhotos"
            :key="index"
            class="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            @click="openLightbox(index)"
            data-aos="zoom-in"
            :data-aos-delay="index * 50"
          >
            <!-- Placeholder Image -->
            <div class="aspect-w-16 aspect-h-9 bg-gradient-to-br from-navy to-blue-900 flex items-center justify-center h-64">
              <svg class="w-20 h-20 text-white opacity-30" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"/>
              </svg>
            </div>
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
              <div class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                <h3 class="text-xl font-bold mb-2">{{ photo.title }}</h3>
                <p class="text-sm">{{ photo.description }}</p>
              </div>
            </div>

            <!-- Category Badge -->
            <div class="absolute top-3 right-3 bg-muted-red text-white px-3 py-1 rounded-full text-xs font-semibold">
              {{ photo.category }}
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredPhotos.length === 0" class="text-center py-20">
          <svg class="w-24 h-24 mx-auto text-gray-300 mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"/>
          </svg>
          <p class="text-gray-500 text-lg">No photos in this category yet</p>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <transition name="fade">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
        @click="closeLightbox"
      >
        <button
          @click="closeLightbox"
          class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <button
          v-if="currentPhotoIndex > 0"
          @click.stop="previousPhoto"
          class="absolute left-4 text-white hover:text-gray-300 transition-colors"
        >
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <button
          v-if="currentPhotoIndex < filteredPhotos.length - 1"
          @click.stop="nextPhoto"
          class="absolute right-4 text-white hover:text-gray-300 transition-colors"
        >
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <div class="max-w-4xl w-full" @click.stop>
          <div class="bg-gradient-to-br from-navy to-blue-900 rounded-lg p-8 flex items-center justify-center" style="height: 500px;">
            <svg class="w-32 h-32 text-white opacity-30" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div class="bg-white p-6 rounded-b-lg">
            <h3 class="text-2xl font-bold text-navy mb-2">{{ filteredPhotos[currentPhotoIndex]?.title }}</h3>
            <p class="text-gray-700">{{ filteredPhotos[currentPhotoIndex]?.description }}</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedCategory = ref('All')
const lightboxOpen = ref(false)
const currentPhotoIndex = ref(0)

const categories = ['All', 'Events', 'Campus', 'Students', 'Awards']

const photos = [
  {
    title: 'Graduation Ceremony 2024',
    description: 'Our graduating class celebrating their achievements',
    category: 'Events'
  },
  {
    title: 'Science Laboratory',
    description: 'Students conducting experiments in our modern lab',
    category: 'Campus'
  },
  {
    title: 'Inter-House Sports',
    description: 'Annual sports competition bringing houses together',
    category: 'Events'
  },
  {
    title: 'Main Administration Block',
    description: 'The heart of academic administration',
    category: 'Campus'
  },
  {
    title: 'Students in Class',
    description: 'Engaged learning in a modern classroom setting',
    category: 'Students'
  },
  {
    title: 'NSMQ Champions',
    description: 'Regional champions of the Science and Maths Quiz',
    category: 'Awards'
  },
  {
    title: 'Cultural Day Celebration',
    description: 'Students showcasing Ghanaian cultural heritage',
    category: 'Events'
  },
  {
    title: 'School Library',
    description: 'Well-stocked library for research and study',
    category: 'Campus'
  },
  {
    title: 'Drama Performance',
    description: 'Students performing at the annual arts festival',
    category: 'Students'
  },
  {
    title: 'Debate Competition Winners',
    description: 'National debate champions with their trophy',
    category: 'Awards'
  },
  {
    title: 'Sports Complex',
    description: 'State-of-the-art facilities for athletics',
    category: 'Campus'
  },
  {
    title: 'Music Band Practice',
    description: 'School band preparing for annual concert',
    category: 'Students'
  }
]

const filteredPhotos = computed(() => {
  if (selectedCategory.value === 'All') {
    return photos
  }
  return photos.filter(photo => photo.category === selectedCategory.value)
})

const openLightbox = (index) => {
  currentPhotoIndex.value = index
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
}

const nextPhoto = () => {
  if (currentPhotoIndex.value < filteredPhotos.value.length - 1) {
    currentPhotoIndex.value++
  }
}

const previousPhoto = () => {
  if (currentPhotoIndex.value > 0) {
    currentPhotoIndex.value--
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
