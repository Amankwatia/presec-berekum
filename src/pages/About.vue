<template>
  <div class="about">
    <!-- Page Header -->
    <section class="bg-navy text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-4" data-aos="fade-down">About PRESEC, Berekum</h1>
        <p class="text-xl text-gray-300" data-aos="fade-up">Our Heritage, Our Mission, Our Vision</p>
      </div>
    </section>

    <!-- Mission, Vision, Values -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="text-center p-8 rounded-lg bg-gray-50 hover:shadow-xl transition-shadow duration-300" data-aos="fade-up">
            <div class="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-navy mb-4">Our Mission</h3>
            <p class="text-gray-700">
              To provide quality education that develops the intellectual, moral, and physical capabilities 
              of students, preparing them to be responsible citizens and future leaders.
            </p>
          </div>

          <div class="text-center p-8 rounded-lg bg-gray-50 hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="100">
            <div class="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-navy mb-4">Our Vision</h3>
            <p class="text-gray-700">
              To be a leading educational institution in Ghana and beyond, recognized for academic excellence, 
              character development, and innovation in teaching and learning.
            </p>
          </div>

          <div class="text-center p-8 rounded-lg bg-gray-50 hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="200">
            <div class="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-navy mb-4">Core Values</h3>
            <ul class="text-gray-700 space-y-2">
              <li class="font-semibold">• Excellence</li>
              <li class="font-semibold">• Integrity</li>
              <li class="font-semibold">• Discipline</li>
              <li class="font-semibold">• Innovation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- History -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl font-bold text-navy text-center mb-8" data-aos="fade-up">Our History</h2>
          <div class="bg-white rounded-lg shadow-lg p-8" data-aos="fade-up">
            <p class="text-lg text-gray-700 leading-relaxed mb-4">
              PRESEC, Berekum, stands as a beacon of academic excellence and discipline in Ghana's educational landscape. 
              Founded with the vision of providing quality secondary education to the youth of the Bono Region and beyond, 
              the school has grown into one of the most respected institutions in the country.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed mb-4">
              Guided by the principles of <span class="font-semibold italic">Determination and Perseverance</span>, 
              the school nurtures students to become responsible leaders and innovators in society. Over the years, 
              PRESEC, Berekum has produced distinguished alumni who have excelled in various fields including medicine, 
              law, engineering, politics, and the arts.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              The school's commitment to holistic education ensures that students not only achieve academic success 
              but also develop strong character, leadership skills, and a sense of social responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-navy text-center mb-12" data-aos="fade-up">Our Leadership</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div 
            v-for="(leader, index) in leadership" 
            :key="index"
            class="text-center" 
            data-aos="zoom-in"
            :data-aos-delay="index * 100"
          >
            <div class="w-40 h-40 bg-gradient-to-br from-navy to-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg class="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-navy mb-2">{{ leader.name }}</h3>
            <p class="text-muted-red font-semibold mb-2">{{ leader.position }}</p>
            <p class="text-gray-600 text-sm">{{ leader.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Motto & Anthem -->
    <section class="py-16 bg-navy text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-8" data-aos="fade-up">Our Motto</h2>
          <p class="text-3xl italic mb-12" data-aos="fade-up">"Determination and Perseverance"</p>
          <div class="bg-white/10 rounded-lg p-8 backdrop-blur-sm" data-aos="fade-up">
            <h3 class="text-2xl font-bold mb-4">School Anthem</h3>
            <p class="text-gray-300 italic">
              [School anthem lyrics would be displayed here - 
              a hymn celebrating the school's values, heritage, and aspirations]
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const leadership = [
  {
    name: 'Mrs. Rebecca Appiah-Mensah',
    position: 'Headmistress',
    description: 'Leading with vision and dedication to academic excellence and student development.'
  },
  {
    name: 'Mr Awuku Alexander',
    position: 'Assistant Headmaster (Academic)',
    description: 'Overseeing curriculum development and maintaining high academic standards.'
  },
  {
    name: 'Mr. Dennis Opoku Mensah',
    position: 'Assistant Headmaster (Administration)',
    description: 'Managing school operations and ensuring smooth administrative processes.'
  },
  {
    name: 'Rev Asiamah Ernest',
    position: 'Assistant Headmaster (Domestic)',
    description: 'Fostering a disciplined and respectful school environment for all students.'
  }
]
</script>
