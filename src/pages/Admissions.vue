<template>
  <div class="admissions">
    <!-- Page Header -->
    <section class="bg-navy text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-4" data-aos="fade-down">Admissions</h1>
        <p class="text-xl text-gray-300" data-aos="fade-up">Join the PRESEC, Berekum Family</p>
      </div>
    </section>

    <!-- Admission Process -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-navy text-center mb-12" data-aos="fade-up">Admission Process</h2>
        <div class="max-w-4xl mx-auto">
          <div class="space-y-6">
            <div 
              v-for="(step, index) in admissionSteps" 
              :key="index"
              class="flex items-start bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-right"
              :data-aos-delay="index * 100"
            >
              <div class="flex-shrink-0 w-12 h-12 bg-muted-red text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                {{ index + 1 }}
              </div>
              <div>
                <h3 class="text-xl font-bold text-navy mb-2">{{ step.title }}</h3>
                <p class="text-gray-700">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Requirements -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-navy text-center mb-12" data-aos="fade-up">Admission Requirements</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div class="bg-white rounded-lg shadow-lg p-8" data-aos="fade-up">
            <div class="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-navy mb-4">Academic Requirements</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-muted-red mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Completion of Basic Education Certificate Examination (BECE)</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-muted-red mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Minimum aggregate score as determined by GES</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-muted-red mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Satisfactory performance in core subjects</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-muted-red mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Selection through the Computerized School Selection and Placement System (CSSPS)</span>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="100">
            <div class="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-navy mb-4">Required Documents</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-muted-red mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Completed application form</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-muted-red mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Birth certificate or statutory declaration of age</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-muted-red mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>BECE results slip</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-muted-red mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Passport-size photographs (4 copies)</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-muted-red mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Medical report from a recognized health facility</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Prospectus Download -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center bg-gradient-to-br from-navy to-blue-900 text-white rounded-lg p-12" data-aos="zoom-in">
          <svg class="w-20 h-20 mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"/>
          </svg>
          <h2 class="text-3xl font-bold mb-4">Download Our Prospectus</h2>
          <p class="text-lg mb-6 text-gray-200">
            Get detailed information about our programs, facilities, and admission procedures.
          </p>
          <button class="btn-primary">
            Download Prospectus (PDF)
          </button>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold text-navy mb-6" data-aos="fade-up">Ready to Apply?</h2>
        <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto" data-aos="fade-up">
          Join thousands of successful alumni who started their journey at PRESEC, Berekum. 
          Take the first step towards a bright future today.
        </p>
        <button 
          class="btn-primary px-10 py-4 text-lg"
          data-aos="zoom-in"
        >
          Apply Now
        </button>
        <p class="text-sm text-gray-600 mt-4">
          Application portal opens in September for the following academic year
        </p>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-navy text-center mb-12" data-aos="fade-up">Frequently Asked Questions</h2>
        <div class="max-w-3xl mx-auto space-y-4">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="bg-gray-50 rounded-lg p-6"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <h3 class="text-lg font-bold text-navy mb-2">{{ faq.question }}</h3>
            <p class="text-gray-700">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const admissionSteps = [
  {
    title: 'Complete BECE',
    description: 'Successfully complete your Basic Education Certificate Examination with satisfactory grades.'
  },
  {
    title: 'School Selection',
    description: 'List PRESEC, Berekum as one of your preferred schools during the CSSPS selection process.'
  },
  {
    title: 'Placement Notification',
    description: 'Receive your placement notification from the Ghana Education Service.'
  },
  {
    title: 'Submit Documents',
    description: 'Gather all required documents and submit them to the school administration office.'
  },
  {
    title: 'Medical Examination',
    description: 'Undergo a medical examination at an approved health facility and submit the report.'
  },
  {
    title: 'Pay Fees',
    description: 'Complete the payment of admission and other required fees as stipulated by the school.'
  },
  {
    title: 'Reporting Day',
    description: 'Report to school on the designated date with all necessary items as listed in the prospectus.'
  }
]

const faqs = [
  {
    question: 'When does the application period begin?',
    answer: 'The application period typically opens in September for admission in the following academic year. However, placement is done through the national CSSPS system.'
  },
  {
    question: 'Is there an entrance examination?',
    answer: 'No, admission to PRESEC, Berekum is based on your BECE results and the national computerized placement system (CSSPS).'
  },
  {
    question: 'Do you offer boarding facilities?',
    answer: 'Yes, PRESEC, Berekum has excellent boarding facilities for both male and female students, with comfortable dormitories and dedicated houseparents.'
  },
  {
    question: 'What programs do you offer?',
    answer: 'We offer General Science, General Arts, Business, Visual Arts, and Home Economics programs, all aligned with the GES curriculum.'
  }
]
</script>
