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
            class="btn-primary"
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

    <!-- Programmes Section -->
    <section class="py-16 bg-white" data-aos="fade-up">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-12">
          <h2 class="text-4xl font-bold text-navy">Learning Areas</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <article
            v-for="programme in programmes"
            :key="programme.name"
            class="rounded-2xl border border-navy/10 bg-white/90 backdrop-blur-sm p-6 md:p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            data-aos="fade-up"
            :data-aos-delay="programme.delay"
          >
            <div class="flex items-center gap-4 mb-6">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted-red/10 text-2xl">
                {{ programme.icon }}
              </div>
              <div>
                <p class="text-xs uppercase tracking-widest text-navy/60">Programme</p>
                <h3 class="text-xl font-semibold text-navy">{{ programme.name }}</h3>
              </div>
            </div>
            <p class="text-sm text-gray-600 leading-relaxed mb-6">
              {{ programme.summary }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="focus in programme.focus"
                :key="focus"
                class="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-navy/5 px-3 py-1 text-xs font-semibold text-navy/80"
              >
                <span class="inline-flex h-1.5 w-1.5 rounded-full bg-muted-red"></span>
                {{ focus }}
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Featured Gallery Section -->
    <section class="py-16 bg-gray-50" data-aos="fade-up">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto text-center mb-12">
          <span class="inline-block uppercase tracking-widest text-sm text-muted-red font-semibold mb-3">
            Campus Life
          </span>
          <h2 class="text-4xl font-bold text-navy mb-4">Highlights from Our Gallery</h2>
          <p class="text-gray-600">
            A glimpse into the vibrant academic, cultural, and co-curricular life that defines the PRESEC experience.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(item, index) in featuredGallery"
            :key="item.title"
            class="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
            :data-aos-delay="index * 100"
          >
            <div class="aspect-w-4 aspect-h-3">
              <img :src="item.image" :alt="item.title" class="object-cover w-full h-full group-hover:scale-105 transition duration-500" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent opacity-80 group-hover:opacity-100 transition duration-300"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-left text-white">
              <span class="inline-flex items-center gap-2 text-xs uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full mb-3">
                <span class="h-1 w-1 rounded-full bg-muted-red"></span>
                {{ item.category }}
              </span>
              <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
              <p class="text-sm text-gray-200">{{ item.description }}</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-10">
          <router-link
            to="/gallery"
            class="inline-flex items-center gap-2 text-navy font-semibold hover:text-muted-red transition"
          >
            View Full Gallery
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
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
          class="btn-primary px-10 py-4 text-lg"
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

const programmes = [
  {
    name: 'General Science',
    summary: 'Integrated physics, chemistry, biology, and computing reinforced through sustained laboratory practice and inquiry-based learning.',
    focus: ['Research mentorship', 'STEM competition prep'],
    icon: '🔬',
    delay: 0
  },
  {
    name: 'General Business',
    summary: 'Accounting, economics, and business analytics delivered with real-world case studies and entrepreneurial simulations.',
    focus: ['Financial literacy labs', 'Enterprise incubation'],
    icon: '💼',
    delay: 100
  },
  {
    name: 'General Arts',
    summary: 'Humanities pathway covering languages, literature, civics, and the social sciences with an emphasis on global perspectives.',
    focus: ['Critical inquiry studios', 'Leadership communication'],
    icon: '📚',
    delay: 200
  },
  {
    name: 'Visual Arts',
    summary: 'Design studio curriculum spanning graphic communication, textiles, sculpture, and digital creativity.',
    focus: ['Portfolio development', 'Creative industry exposure'],
    icon: '🎨',
    delay: 300
  },
  {
    name: 'Home Economics',
    summary: 'Applied nutrition, textiles, and resource management underpinned by hospitality practice and entrepreneurship.',
    focus: ['Hospitality lab practice', 'Community wellness projects'],
    icon: '🍽️',
    delay: 400
  },
  {
    name: 'Agricultural Science',
    summary: 'Modern crop and animal science blended with agribusiness management and environmental stewardship.',
    focus: ['Field experimentation', 'Agri-innovation labs'],
    icon: '🌱',
    delay: 500
  }
]

const featuredGallery = [
  {
    title: 'STEM Innovation Lab',
    category: 'Academics',
    description: 'Students showcasing robotics and coding projects during the annual STEM showcase.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Cultural Day Celebrations',
    category: 'Culture',
    description: 'A vibrant display of Ghanaian heritage, music, and dance from across the regions.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Inter-School Sports Finals',
    category: 'Sports',
    description: 'Our athletics team representing PRESEC with pride and sportsmanship at the national finals.',
    image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Leadership & Service Projects',
    category: 'Community',
    description: 'Students spearheading outreach initiatives and mentorship programmes within the Berekum community.',
    image: 'https://images.unsplash.com/photo-1484882918957-e9c7f866b160?auto=format&fit=crop&w=1200&q=80'
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
