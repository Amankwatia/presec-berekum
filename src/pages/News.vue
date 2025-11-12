<template>
  <div class="news">
    <!-- Page Header -->
    <section class="bg-navy text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-4" data-aos="fade-down">News & Events</h1>
        <p class="text-xl text-gray-300" data-aos="fade-up">Stay Updated with PRESEC, Berekum</p>
      </div>
    </section>

    <!-- News Grid -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="(item, index) in newsItems"
            :key="index"
            class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <!-- Featured Image Placeholder -->
            <div class="h-48 bg-gradient-to-br from-navy to-blue-900 flex items-center justify-center relative">
              <svg class="w-16 h-16 text-white opacity-30" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"/>
              </svg>
              <div class="absolute top-3 left-3 bg-muted-red text-white px-3 py-1 rounded-full text-xs font-semibold">
                {{ item.category }}
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <div class="flex items-center text-gray-500 text-sm mb-3">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                </svg>
                {{ item.date }}
              </div>
              <h3 class="text-xl font-bold text-navy mb-3 hover:text-muted-red transition-colors">
                {{ item.title }}
              </h3>
              <p class="text-gray-700 mb-4 line-clamp-3">
                {{ item.description }}
              </p>
              <button class="text-muted-red hover:underline font-semibold inline-flex items-center">
                Read More
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Upcoming Events -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-navy text-center mb-12" data-aos="fade-up">Upcoming Events</h2>
        <div class="max-w-4xl mx-auto space-y-6">
          <div
            v-for="(event, index) in upcomingEvents"
            :key="index"
            class="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-start md:items-center hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-right"
            :data-aos-delay="index * 100"
          >
            <!-- Date Box -->
            <div class="flex-shrink-0 bg-muted-red text-white rounded-lg p-4 text-center mb-4 md:mb-0 md:mr-6">
              <div class="text-3xl font-bold">{{ event.day }}</div>
              <div class="text-sm">{{ event.month }}</div>
            </div>

            <!-- Event Details -->
            <div class="flex-1">
              <h3 class="text-xl font-bold text-navy mb-2">{{ event.title }}</h3>
              <p class="text-gray-700 mb-2">{{ event.description }}</p>
              <div class="flex items-center text-gray-500 text-sm">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
                {{ event.time }}
                <svg class="w-4 h-4 ml-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
                {{ event.location }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Subscription -->
    <section class="py-16 bg-navy text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-4" data-aos="fade-up">Stay in the Loop</h2>
          <p class="text-lg mb-8 text-gray-300" data-aos="fade-up">
            Subscribe to our newsletter to receive the latest news and updates from PRESEC, Berekum.
          </p>
          <form class="flex flex-col sm:flex-row gap-4" data-aos="fade-up">
            <input
              type="email"
              placeholder="Enter your email address"
              class="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-muted-red"
            />
            <button
              type="submit"
              class="bg-muted-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const newsItems = [
  {
    title: 'PRESEC Berekum Wins Regional NSMQ',
    description: 'Our brilliant science students have once again proven their mettle by emerging as champions in the regional edition of the National Science and Maths Quiz. The team displayed exceptional knowledge and quick thinking throughout the competition.',
    date: 'November 10, 2025',
    category: 'Achievement'
  },
  {
    title: 'New ICT Lab Inaugurated',
    description: 'The school has commissioned a state-of-the-art ICT laboratory equipped with 50 modern computers and high-speed internet connectivity. This facility will enhance digital literacy among students and prepare them for the technology-driven future.',
    date: 'November 5, 2025',
    category: 'Infrastructure'
  },
  {
    title: '2026 Admissions Now Open',
    description: 'Applications for the 2026 academic year are now being accepted. Prospective students are encouraged to complete their applications early. Visit our admissions page for more information on requirements and procedures.',
    date: 'October 28, 2025',
    category: 'Admissions'
  },
  {
    title: 'Outstanding WASSCE Results',
    description: 'PRESEC Berekum achieves a remarkable 98% pass rate in the 2025 WASSCE, with over 60% of students obtaining aggregate scores below 10. This outstanding performance reaffirms our commitment to academic excellence.',
    date: 'October 20, 2025',
    category: 'Achievement'
  },
  {
    title: 'Alumni Homecoming 2025',
    description: 'Join us for the annual alumni reunion on December 15th, 2025. Reconnect with old classmates, share memories, and celebrate the legacy of PRESEC, Berekum. Registration is now open on the alumni portal.',
    date: 'October 15, 2025',
    category: 'Event'
  },
  {
    title: 'Inter-House Sports Festival',
    description: 'The annual inter-house sports competition was a resounding success, with all four houses showcasing remarkable athletic talents. Red House emerged as the overall champion, claiming the coveted trophy.',
    date: 'October 8, 2025',
    category: 'Sports'
  }
]

const upcomingEvents = [
  {
    day: '15',
    month: 'DEC',
    title: 'Alumni Homecoming',
    description: 'Annual reunion for all PRESEC Berekum alumni',
    time: '10:00 AM - 5:00 PM',
    location: 'School Campus'
  },
  {
    day: '20',
    month: 'DEC',
    title: 'End of Year Concert',
    description: 'Musical performances by students and special guests',
    time: '6:00 PM - 9:00 PM',
    location: 'School Auditorium'
  },
  {
    day: '15',
    month: 'JAN',
    title: 'New Academic Year Begins',
    description: 'Reporting day for all students',
    time: '8:00 AM',
    location: 'School Campus'
  },
  {
    day: '20',
    month: 'FEB',
    title: 'Parents\' Day',
    description: 'Meeting with parents and guardians',
    time: '9:00 AM - 3:00 PM',
    location: 'School Assembly Hall'
  }
]
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
