<template>
  <div class="home">
    <!-- Hero Section -->
    <HeroSection />

    <!-- About Summary Section -->
    <section class="py-16 bg-white" data-aos="fade-up">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-navy mb-6">Welcome to PRESEC, Berekum</h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-8">
            PRESEC, Berekum, stands as a beacon of academic excellence and discipline in Ghana's educational landscape. 
            Guided by the principles of <span class="font-semibold italic">Determination and Perseverance</span>, 
            the school nurtures students to become responsible leaders and innovators in society. 
            We are committed to providing quality education that shapes character and builds futures.
          </p>
          <router-link 
            to="/about"
            class="inline-block bg-muted-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Discover Our Story
          </router-link>
        </div>
      </div>
    </section>

    <!-- Facilities Section -->
    <section class="py-16 bg-gray-50" data-aos="fade-up">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-navy text-center mb-12">Our Facilities</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(facility, index) in facilities" 
            :key="index"
            class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="zoom-in"
            :data-aos-delay="index * 100"
          >
            <div class="h-48 bg-gradient-to-br from-navy to-blue-900 flex items-center justify-center">
              <svg class="w-20 h-20 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                <path :d="facility.icon"/>
              </svg>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-navy mb-2">{{ facility.name }}</h3>
              <p class="text-gray-600">{{ facility.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Announcements Section -->
    <section class="py-16 bg-white" data-aos="fade-up">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-navy text-center mb-12">Latest Announcements</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div 
            v-for="(announcement, index) in announcements" 
            :key="index"
            class="bg-gray-50 rounded-lg p-6 border-l-4 border-muted-red hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="flex items-center mb-3">
              <span class="bg-muted-red text-white px-3 py-1 rounded-full text-xs font-semibold">
                {{ announcement.date }}
              </span>
            </div>
            <h3 class="text-xl font-bold text-navy mb-3">{{ announcement.title }}</h3>
            <p class="text-gray-600 mb-4">{{ announcement.description }}</p>
            <router-link 
              to="/news"
              class="text-muted-red hover:underline font-semibold inline-flex items-center"
            >
              Read More
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-navy text-white" data-aos="fade-up">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-6">Ready to Join PRESEC, Berekum?</h2>
        <p class="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Take the first step towards academic excellence and personal growth. 
          Our admissions team is ready to guide you through the process.
        </p>
        <router-link 
          to="/admissions"
          class="inline-block bg-muted-red hover:bg-red-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
        >
          Apply Today
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'

const facilities = [
  {
    name: 'Modern Classrooms',
    description: 'Well-equipped learning spaces designed for interactive and engaging education.',
    icon: 'M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z'
  },
  {
    name: 'Science Laboratories',
    description: 'State-of-the-art labs for chemistry, physics, and biology experiments.',
    icon: 'M9 2a1 1 0 000 2h2a1 1 0 100-2H9z M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5z'
  },
  {
    name: 'Dormitories',
    description: 'Comfortable and secure boarding facilities for residential students.',
    icon: 'M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'
  },
  {
    name: 'Sports Complex',
    description: 'Extensive facilities for athletics, football, basketball, and other sports.',
    icon: 'M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z'
  }
]

const announcements = [
  {
    date: 'Nov 10, 2025',
    title: 'Admissions Open for 2026',
    description: 'Applications are now being accepted for the 2026 academic year. Don\'t miss this opportunity to join our community.'
  },
  {
    date: 'Nov 5, 2025',
    title: 'Science Fair Winners',
    description: 'Congratulations to our students who excelled at the Regional Science Fair, bringing home multiple awards.'
  },
  {
    date: 'Oct 28, 2025',
    title: 'Alumni Homecoming',
    description: 'Join us for our annual alumni reunion on December 15th. Reconnect with classmates and celebrate our legacy.'
  }
]
</script>
