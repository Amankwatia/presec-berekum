<template>
  <div class="academics">
    <!-- Page Header -->
    <section class="bg-navy text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-4" data-aos="fade-down">Academics</h1>
        <p class="text-xl text-gray-300" data-aos="fade-up">Excellence in Education</p>
      </div>
    </section>

    <!-- Academic Departments -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-navy text-center mb-12" data-aos="fade-up">Academic Departments</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div 
            v-for="(department, index) in departments" 
            :key="index"
            class="bg-gray-50 rounded-lg p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-muted-red"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path :d="department.icon"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-navy mb-3">{{ department.name }}</h3>
            <p class="text-gray-700 mb-4">{{ department.description }}</p>
            <ul class="space-y-1">
              <li v-for="(subject, idx) in department.subjects" :key="idx" class="text-gray-600 text-sm">
                • {{ subject }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Curriculum -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl font-bold text-navy text-center mb-8" data-aos="fade-up">Our Curriculum</h2>
          <div class="bg-white rounded-lg shadow-lg p-8" data-aos="fade-up">
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              PRESEC, Berekum follows the Ghana Education Service (GES) curriculum, offering a comprehensive 
              educational program that prepares students for the West African Senior School Certificate Examination (WASSCE).
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 class="text-xl font-bold text-navy mb-3">Core Subjects</h3>
                <ul class="space-y-2 text-gray-700">
                  <li>• English Language</li>
                  <li>• Mathematics (Core)</li>
                  <li>• Integrated Science</li>
                  <li>• Social Studies</li>
                  <li>• Information & Communication Technology</li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-bold text-navy mb-3">Elective Programs</h3>
                <ul class="space-y-2 text-gray-700">
                  <li>• General Science</li>
                  <li>• General Arts</li>
                  <li>• Business</li>
                  <li>• Visual Arts</li>
                  <li>• Home Economics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Achievements -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-navy text-center mb-12" data-aos="fade-up">Our Achievements</h2>
        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-navy hidden md:block"></div>
            
            <!-- Timeline Items -->
            <div 
              v-for="(achievement, index) in achievements" 
              :key="index"
              class="mb-8 flex flex-col md:flex-row items-center"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            >
              <div :class="index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:order-2 md:pl-8'" class="flex-1 mb-4 md:mb-0">
                <div class="bg-gray-50 rounded-lg p-6 shadow-lg">
                  <span class="inline-block bg-muted-red text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    {{ achievement.year }}
                  </span>
                  <h3 class="text-xl font-bold text-navy mb-2">{{ achievement.title }}</h3>
                  <p class="text-gray-700">{{ achievement.description }}</p>
                </div>
              </div>
              <div class="w-4 h-4 bg-muted-red rounded-full border-4 border-white shadow hidden md:block"></div>
              <div class="flex-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Extra-Curricular -->
    <section class="py-16 bg-navy text-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12" data-aos="fade-up">Beyond the Classroom</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div 
            v-for="(activity, index) in activities" 
            :key="index"
            class="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            data-aos="zoom-in"
            :data-aos-delay="index * 100"
          >
            <div class="text-4xl mb-3">{{ activity.icon }}</div>
            <h3 class="text-lg font-bold">{{ activity.name }}</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const departments = [
  {
    name: 'Science Department',
    description: 'Fostering scientific inquiry and analytical thinking',
    icon: 'M9 2a1 1 0 000 2h2a1 1 0 100-2H9z M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5z',
    subjects: ['Physics', 'Chemistry', 'Biology', 'Elective Mathematics']
  },
  {
    name: 'Arts Department',
    description: 'Developing critical thinking and communication skills',
    icon: 'M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z',
    subjects: ['Literature', 'History', 'Government', 'Economics']
  },
  {
    name: 'Business Department',
    description: 'Building future entrepreneurs and business leaders',
    icon: 'M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9z M4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1z M9 12a1 1 0 000 2h6a1 1 0 100-2H9z',
    subjects: ['Business Management', 'Accounting', 'Economics', 'Costing']
  },
  {
    name: 'Languages',
    description: 'Promoting multilingual communication',
    icon: 'M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5z M9 12a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z M7 10a1 1 0 011-1h.01a1 1 0 110 2H8a1 1 0 01-1-1z M12 10a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z',
    subjects: ['French', 'Twi/Akan', 'Ga', 'Ewe']
  },
  {
    name: 'Mathematics',
    description: 'Excellence in numerical and logical reasoning',
    icon: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z',
    subjects: ['Core Mathematics', 'Elective Mathematics', 'Statistics']
  },
  {
    name: 'ICT & Technology',
    description: 'Preparing students for the digital age',
    icon: 'M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5z',
    subjects: ['ICT', 'Computer Studies', 'Technical Drawing']
  }
]

const achievements = [
  {
    year: '2024',
    title: 'Regional NSMQ Champions',
    description: 'Our science team emerged as regional champions in the National Science and Maths Quiz.'
  },
  {
    year: '2023',
    title: '100% WASSCE Pass Rate',
    description: 'Achieved a perfect pass rate in the West African Senior School Certificate Examination.'
  },
  {
    year: '2022',
    title: 'Best School Award',
    description: 'Recognized as the Best Senior High School in the Bono Region for academic excellence.'
  },
  {
    year: '2021',
    title: 'National Debate Champions',
    description: 'Won the National Inter-School Debate Competition, showcasing exceptional oratory skills.'
  }
]

const activities = [
  { name: 'Sports', icon: '⚽' },
  { name: 'Drama & Arts', icon: '🎭' },
  { name: 'Music', icon: '🎵' },
  { name: 'Debate Club', icon: '🗣️' },
  { name: 'Science Club', icon: '🔬' },
  { name: 'Literature', icon: '📚' },
  { name: 'Robotics', icon: '🤖' },
  { name: 'Community Service', icon: '🤝' }
]
</script>
