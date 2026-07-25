<template>
  <div class="alumni">

    <!-- ── Hero Section ─────────────────────────────────────────── -->
    <section class="relative bg-navy text-white py-24 overflow-hidden">
      <!-- subtle red accent bar -->
      <div class="absolute top-0 left-0 w-full h-1 bg-presec-red"></div>
      <!-- faint pattern overlay -->
      <div class="absolute inset-0 opacity-5"
        style="background-image: repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%); background-size: 20px 20px;">
      </div>

      <div class="relative container mx-auto px-4 text-center">
        <p class="text-presec-red font-semibold tracking-widest uppercase text-sm mb-3" data-aos="fade-down">
          Old Students Community
        </p>
        <h1 class="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-down" data-aos-delay="50">
          Alumni Community
        </h1>
        <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="100">
          Connecting past students, celebrating achievements, and supporting the future of PRESEC Berekum.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="150">
          <a
            href="#register"
            @click.prevent="scrollTo('register')"
            class="inline-block bg-presec-red hover:bg-muted-red text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
          >
            Register as Alumni
          </a>
          <a
            href="#support"
            @click.prevent="scrollTo('support')"
            class="inline-block bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
          >
            Support the School
          </a>
        </div>
      </div>
    </section>

    <!-- ── About Alumni Community ────────────────────────────────── -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-4xl font-bold text-navy mb-4">About Our Alumni Community</h2>
          <p class="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            The PRESEC Berekum Alumni Community brings together past students from different year groups,
            professions, and locations. It serves as a platform for networking, mentorship, school development,
            and celebrating the achievements of old students.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(feature, i) in communityFeatures"
            :key="feature.title"
            class="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-up"
            :data-aos-delay="i * 80"
          >
            <div class="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
              <component :is="'svg'" class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="feature.icon"></component>
            </div>
            <h3 class="text-xl font-bold text-navy mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Notable Alumni ─────────────────────────────────────────── -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-4xl font-bold text-navy mb-4">Notable Alumni</h2>
          <p class="text-gray-600">Celebrating old students who are making a difference.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(alumni, i) in notableAlumni"
            :key="alumni.name + i"
            class="bg-white rounded-2xl overflow-hidden border border-navy/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            data-aos="fade-up"
            :data-aos-delay="i * 80"
          >
            <!-- Image placeholder -->
            <div class="h-44 bg-navy/10 flex items-center justify-center">
              <svg class="w-20 h-20 text-navy/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
            <div class="p-5">
              <div class="inline-block bg-navy text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Class of {{ alumni.yearGroup }}
              </div>
              <h3 class="text-lg font-bold text-navy mb-1">{{ alumni.name }}</h3>
              <p class="text-presec-red font-medium text-sm mb-2">{{ alumni.profession }}</p>
              <p class="text-gray-600 text-sm leading-relaxed">{{ alumni.achievement }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Alumni Registration Form ───────────────────────────────── -->
    <section id="register" class="py-16 bg-white">
      <div class="container mx-auto px-4 max-w-3xl">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-4xl font-bold text-navy mb-4">Register as an Alumni</h2>
          <p class="text-gray-600">Help us reconnect with old students and build a stronger community.</p>
        </div>

        <!-- Success message -->
        <transition name="fade">
          <div v-if="formSubmitted" class="bg-green-50 border border-green-200 text-green-800 rounded-2xl p-6 text-center mb-8" data-aos="fade-up">
            <svg class="w-12 h-12 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p class="font-semibold text-lg mb-1">Registration Received!</p>
            <p class="text-sm">Thank you for registering. The school will contact you when the alumni database is being updated.</p>
          </div>
        </transition>

        <form
          v-if="!formSubmitted"
          ref="registrationFormRef"
          @submit.prevent="submitForm"
          :action="GOOGLE_FORM_ACTION"
          method="POST"
          :target="IFRAME_NAME"
          class="bg-gray-50 rounded-2xl p-8 border border-navy/10 shadow-sm"
          data-aos="fade-up"
          novalidate
        >
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Full Name -->
            <div class="sm:col-span-2">
              <label for="fullName" class="block text-sm font-semibold text-navy mb-1">
                Full Name <span class="text-presec-red">*</span>
              </label>
              <input
                id="fullName"
                :name="GOOGLE_FORM_FIELDS.fullName"
                v-model="form.fullName"
                type="text"
                required
                placeholder="Your full name"
                class="w-full border border-navy/20 rounded-lg px-4 py-2.5 text-navy focus:outline-none focus:ring-2 focus:ring-navy/40 bg-white"
              />
            </div>

            <!-- Gender -->
            <div>
              <label for="gender" class="block text-sm font-semibold text-navy mb-1">
                Gender <span class="text-presec-red">*</span>
              </label>
              <select
                id="gender"
                :name="GOOGLE_FORM_OPTIONAL_FIELDS.gender || undefined"
                v-model="form.gender"
                required
                class="w-full border border-navy/20 rounded-lg px-4 py-2.5 text-navy focus:outline-none focus:ring-2 focus:ring-navy/40 bg-white"
              >
                <option value="" disabled>Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>

            <!-- Year of Completion -->
            <div>
              <label for="yearCompletion" class="block text-sm font-semibold text-navy mb-1">
                Year of Completion <span class="text-presec-red">*</span>
              </label>
              <input
                id="yearCompletion"
                :name="GOOGLE_FORM_FIELDS.yearCompletion"
                v-model="form.yearCompletion"
                type="number"
                required
                placeholder="e.g. 2010"
                min="1960"
                :max="currentYear"
                class="w-full border border-navy/20 rounded-lg px-4 py-2.5 text-navy focus:outline-none focus:ring-2 focus:ring-navy/40 bg-white"
              />
            </div>

            <!-- Programme Studied -->
            <div>
              <label for="programme" class="block text-sm font-semibold text-navy mb-1">
                Programme Studied <span class="text-presec-red">*</span>
              </label>
              <select
                id="programme"
                :name="GOOGLE_FORM_FIELDS.programme"
                v-model="form.programme"
                required
                class="w-full border border-navy/20 rounded-lg px-4 py-2.5 text-navy focus:outline-none focus:ring-2 focus:ring-navy/40 bg-white"
              >
                <option value="" disabled>Select programme</option>
                <option value="General Science">General Science</option>
                <option value="General Arts">General Arts</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Business">Business</option>
                <option value="Home Economics">Home Economics</option>
                <option value="Visual Arts">Visual Arts</option>
              </select>
            </div>

            <!-- Current Profession -->
            <div>
              <label for="profession" class="block text-sm font-semibold text-navy mb-1">Current Profession</label>
              <input
                id="profession"
                :name="GOOGLE_FORM_FIELDS.profession"
                v-model="form.profession"
                type="text"
                placeholder="e.g. Engineer, Teacher, Lawyer"
                class="w-full border border-navy/20 rounded-lg px-4 py-2.5 text-navy focus:outline-none focus:ring-2 focus:ring-navy/40 bg-white"
              />
            </div>

            <!-- Current Location -->
            <div>
              <label for="location" class="block text-sm font-semibold text-navy mb-1">Current Location</label>
              <input
                id="location"
                :name="GOOGLE_FORM_FIELDS.location"
                v-model="form.location"
                type="text"
                placeholder="City, Country"
                class="w-full border border-navy/20 rounded-lg px-4 py-2.5 text-navy focus:outline-none focus:ring-2 focus:ring-navy/40 bg-white"
              />
            </div>

            <!-- Phone -->
            <div>
              <label for="phone" class="block text-sm font-semibold text-navy mb-1">
                Phone Number <span class="text-presec-red">*</span><span class="text-gray-400 font-normal text-xs ml-1">(or email required)</span>
              </label>
              <input
                id="phone"
                :name="GOOGLE_FORM_FIELDS.phone"
                v-model="form.phone"
                type="tel"
                placeholder="+233 XXX XXX XXX"
                class="w-full border border-navy/20 rounded-lg px-4 py-2.5 text-navy focus:outline-none focus:ring-2 focus:ring-navy/40 bg-white"
              />
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-semibold text-navy mb-1">
                Email Address <span class="text-presec-red">*</span><span class="text-gray-400 font-normal text-xs ml-1">(or phone required)</span>
              </label>
              <input
                id="email"
                :name="GOOGLE_FORM_FIELDS.email"
                v-model="form.email"
                type="email"
                placeholder="you@example.com"
                class="w-full border border-navy/20 rounded-lg px-4 py-2.5 text-navy focus:outline-none focus:ring-2 focus:ring-navy/40 bg-white"
              />
            </div>

            <!-- Mentor -->
            <div class="sm:col-span-2">
              <p class="block text-sm font-semibold text-navy mb-2">Are you willing to mentor students?</p>
              <div class="flex gap-6">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" :name="GOOGLE_FORM_FIELDS.mentor" v-model="form.mentor" value="Yes" class="accent-navy" />
                  <span class="text-navy text-sm">Yes</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" :name="GOOGLE_FORM_FIELDS.mentor" v-model="form.mentor" value="No" class="accent-navy" />
                  <span class="text-navy text-sm">No</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" :name="GOOGLE_FORM_FIELDS.mentor" v-model="form.mentor" value="Maybe later" class="accent-navy" />
                  <span class="text-navy text-sm">Maybe later</span>
                </label>
              </div>
            </div>

            <!-- Support -->
            <div class="sm:col-span-2">
              <p class="block text-sm font-semibold text-navy mb-2">Are you willing to support school projects?</p>
              <div class="flex gap-6">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" :name="GOOGLE_FORM_FIELDS.support" v-model="form.support" value="Yes" class="accent-navy" />
                  <span class="text-navy text-sm">Yes</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" :name="GOOGLE_FORM_FIELDS.support" v-model="form.support" value="No" class="accent-navy" />
                  <span class="text-navy text-sm">No</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" :name="GOOGLE_FORM_FIELDS.support" v-model="form.support" value="Maybe later" class="accent-navy" />
                  <span class="text-navy text-sm">Maybe later</span>
                </label>
              </div>
            </div>

            <!-- Message -->
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold text-navy mb-1">Short Message (optional)</label>
              <textarea
                id="message"
                :name="GOOGLE_FORM_FIELDS.message"
                v-model="form.message"
                rows="4"
                placeholder="Share a brief message or anything you would like the school to know..."
                class="w-full border border-navy/20 rounded-lg px-4 py-2.5 text-navy focus:outline-none focus:ring-2 focus:ring-navy/40 bg-white resize-none"
              ></textarea>
            </div>
          </div>

          <!-- Validation error -->
          <p v-if="formError" class="text-presec-red text-sm mt-4">{{ formError }}</p>

          <button
            type="submit"
            :disabled="formLoading"
            class="mt-6 w-full bg-navy hover:bg-navy/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-full transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <svg v-if="formLoading" class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
            </svg>
            {{ formLoading ? 'Submitting...' : 'Submit Registration' }}
          </button>
        </form>

        <iframe
          :name="IFRAME_NAME"
          class="hidden"
          title="Alumni registration submission"
          @load="handleSubmissionFrameLoad"
        ></iframe>
      </div>
    </section>

    <!-- ── Support the School ─────────────────────────────────────── -->
    <section id="support" class="py-16 bg-navy text-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-4xl font-bold mb-4">Support the School</h2>
          <p class="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Alumni support plays an important role in improving teaching, learning, infrastructure, and student opportunities.
            Old students can support through donations, mentorship, equipment, scholarships, and career guidance programmes.
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          <div
            v-for="(area, i) in supportAreas"
            :key="area"
            class="bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl p-4 text-center transition-colors duration-300"
            data-aos="fade-up"
            :data-aos-delay="i * 60"
          >
            <p class="text-sm font-medium">{{ area }}</p>
          </div>
        </div>

        <div class="text-center" data-aos="fade-up">
          <a
            href="#register"
            @click.prevent="scrollTo('register')"
            class="inline-block bg-presec-red hover:bg-muted-red text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
          >
            Support a Project
          </a>
        </div>
      </div>
    </section>

    <!-- ── Alumni Events ───────────────────────────────────────────── -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-4xl font-bold text-navy mb-4">Alumni Events</h2>
          <p class="text-gray-600">Opportunities to reconnect, celebrate, and give back.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(event, i) in alumniEvents"
            :key="event.title"
            class="bg-gray-50 rounded-2xl p-6 border border-navy/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            data-aos="fade-up"
            :data-aos-delay="i * 80"
          >
            <div class="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-navy mb-2">{{ event.title }}</h3>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">{{ event.description }}</p>
            <p class="text-presec-red text-xs font-semibold mb-4">{{ event.date }}</p>
            <router-link
              to="/contact"
              class="inline-block text-sm font-semibold text-navy border border-navy rounded-full px-5 py-2 hover:bg-navy hover:text-white transition-colors duration-300"
            >
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Alumni Projects ─────────────────────────────────────────── -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 max-w-5xl">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-4xl font-bold text-navy mb-4">Alumni Projects</h2>
          <p class="text-gray-600">Completed and ongoing projects supported by old students.</p>
        </div>

        <div class="overflow-x-auto rounded-2xl border border-navy/10 shadow-sm" data-aos="fade-up">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-navy text-white">
                <th class="text-left px-6 py-4 font-semibold">Project</th>
                <th class="text-left px-6 py-4 font-semibold">Supporting Group</th>
                <th class="text-left px-6 py-4 font-semibold">Year</th>
                <th class="text-left px-6 py-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(project, i) in alumniProjects"
                :key="project.project"
                :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
                class="border-b border-navy/5"
              >
                <td class="px-6 py-4 font-medium text-navy">{{ project.project }}</td>
                <td class="px-6 py-4 text-gray-600">{{ project.group }}</td>
                <td class="px-6 py-4 text-gray-600">{{ project.year }}</td>
                <td class="px-6 py-4">
                  <span :class="statusClass(project.status)" class="px-3 py-1 rounded-full text-xs font-semibold">
                    {{ project.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ── Mentorship ──────────────────────────────────────────────── -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 class="text-4xl font-bold text-navy mb-6">Become a Mentor</h2>
            <p class="text-gray-700 leading-relaxed mb-6">
              Your experience is valuable. Guide current students through their academic and career journeys.
              Alumni mentors make a lasting impact by sharing knowledge, opportunities, and encouragement.
            </p>
            <div class="flex flex-wrap gap-2 mb-8">
              <span
                v-for="area in mentorshipAreas"
                :key="area"
                class="bg-navy/5 text-navy text-sm font-medium px-4 py-2 rounded-full border border-navy/10"
              >
                {{ area }}
              </span>
            </div>
            <a
              href="#register"
              @click.prevent="scrollTo('register')"
              class="inline-block bg-navy hover:bg-navy/90 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
            >
              Become a Mentor
            </a>
          </div>

          <div class="grid grid-cols-2 gap-4" data-aos="fade-left">
            <div
              v-for="(stat, i) in mentorStats"
              :key="stat.label"
              class="bg-gray-50 rounded-2xl p-6 border border-navy/10 text-center"
              data-aos="fade-up"
              :data-aos-delay="i * 80"
            >
              <p class="text-3xl font-bold text-navy mb-1">{{ stat.value }}</p>
              <p class="text-gray-600 text-sm">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Alumni Gallery ─────────────────────────────────────────── -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-4xl font-bold text-navy mb-4">Alumni Gallery</h2>
          <p class="text-gray-600">Moments from homecoming events, donations, mentorship sessions, and reunions.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(item, i) in galleryItems"
            :key="item.caption"
            class="relative group overflow-hidden rounded-2xl border border-navy/10 bg-navy/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            data-aos="zoom-in"
            :data-aos-delay="i * 60"
          >
            <!-- Placeholder image area -->
            <div class="h-52 flex flex-col items-center justify-center bg-gradient-to-br from-navy/10 to-navy/20">
              <svg class="w-16 h-16 text-navy/30 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span class="text-navy/40 text-xs font-medium uppercase tracking-widest">Photo</span>
            </div>
            <!-- Caption overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p class="text-white text-sm font-medium px-4 pb-4">{{ item.caption }}</p>
            </div>
            <!-- Category badge -->
            <div class="absolute top-3 left-3 bg-presec-red text-white text-xs font-semibold px-3 py-1 rounded-full">
              {{ item.category }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Contact / Join Section ─────────────────────────────────── -->
    <section class="py-16 bg-navy text-white">
      <div class="container mx-auto px-4 max-w-5xl">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-4xl font-bold mb-4">Connect with the Alumni Community</h2>
          <p class="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            To join the official alumni community or support a school project, kindly contact the school administration.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div
            v-for="(contact, i) in contactInfo"
            :key="contact.label"
            class="bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl p-6 text-center transition-colors duration-300"
            data-aos="fade-up"
            :data-aos-delay="i * 80"
          >
            <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="contact.icon"></svg>
            </div>
            <p class="text-sm font-semibold mb-1">{{ contact.label }}</p>
            <p class="text-gray-400 text-xs">{{ contact.value }}</p>
          </div>
        </div>

        <div class="text-center" data-aos="fade-up">
          <router-link
            to="/contact"
            class="inline-block bg-presec-red hover:bg-muted-red text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
          >
            Contact the School
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { onBeforeUnmount, ref } from 'vue'

// ── Scroll helper ────────────────────────────────────────────────────
function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

// ── Community features ───────────────────────────────────────────────
const communityFeatures = [
  {
    title: 'Networking',
    description: 'Connect with old students across different professions and regions.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>'
  },
  {
    title: 'Mentorship',
    description: 'Guide current students through academic and career decisions.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>'
  },
  {
    title: 'School Support',
    description: 'Contribute to school infrastructure, equipment, and scholarships.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>'
  },
  {
    title: 'Alumni Recognition',
    description: 'Celebrate the accomplishments of outstanding old students.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>'
  }
]

// ── Notable alumni placeholder data ─────────────────────────────────
const notableAlumni = [
  {
    name: 'Alumni Name',
    yearGroup: '2005',
    profession: 'Medical Doctor',
    achievement: 'Supporting health education and career guidance for students.'
  },
  {
    name: 'Alumni Name',
    yearGroup: '2010',
    profession: 'Software Engineer',
    achievement: 'Mentoring students in technology and innovation programmes.'
  },
  {
    name: 'Alumni Name',
    yearGroup: '2002',
    profession: 'Entrepreneur',
    achievement: 'Supporting school development and infrastructure projects.'
  },
  {
    name: 'Alumni Name',
    yearGroup: '1998',
    profession: 'Public Servant',
    achievement: 'Promoting leadership and civic responsibility among students.'
  }
]

// ── Support areas ────────────────────────────────────────────────────
const supportAreas = [
  'ICT Lab Support',
  'Library Books',
  'Scholarships',
  'Science Lab Equipment',
  'Sports Equipment',
  'Infrastructure Projects',
  'Mentorship & Career Guidance',
  'General Donations'
]

// ── Alumni events ────────────────────────────────────────────────────
const alumniEvents = [
  {
    title: 'Homecoming Day',
    description: 'An annual event welcoming old students back to campus to celebrate memories and reconnect with teachers and peers.',
    date: 'Date to be announced'
  },
  {
    title: 'Year Group Reunions',
    description: 'Year groups organise their own reunion events to celebrate milestones and reconnect with classmates.',
    date: 'Date to be announced'
  },
  {
    title: 'Mentorship Sessions',
    description: 'Alumni professionals visit campus to share career insights and guide current students.',
    date: 'Date to be announced'
  },
  {
    title: 'Fundraising Programmes',
    description: 'Community fundraising events organised to support school development projects and student scholarships.',
    date: 'Date to be announced'
  },
  {
    title: 'Speech & Prize Giving Day',
    description: 'Notable alumni are invited to address students and support the annual awards ceremony.',
    date: 'Date to be announced'
  }
]

// ── Alumni projects ──────────────────────────────────────────────────
const alumniProjects = [
  { project: 'ICT Lab Support', group: 'Alumni Association', status: 'Ongoing', year: '2026' },
  { project: 'Library Books Donation', group: '2010 Year Group', status: 'Completed', year: '2025' },
  { project: 'Scholarship Fund', group: 'Alumni Association', status: 'Ongoing', year: '2026' },
  { project: 'Sports Equipment Support', group: '2015 Year Group', status: 'Planned', year: '2026' }
]

function statusClass(status) {
  if (status === 'Completed') return 'bg-green-100 text-green-800'
  if (status === 'Ongoing') return 'bg-blue-100 text-blue-800'
  if (status === 'Planned') return 'bg-yellow-100 text-yellow-800'
  return 'bg-gray-100 text-gray-600'
}

// ── Mentorship areas ─────────────────────────────────────────────────
const mentorshipAreas = [
  'Career Guidance',
  'University Application Support',
  'Entrepreneurship',
  'ICT & Digital Skills',
  'Public Speaking',
  'Leadership',
  'Scholarship Opportunities'
]

const mentorStats = [
  { value: 'Many', label: 'Past Students' },
  { value: '30+', label: 'Years of Legacy' },
  { value: '∞', label: 'Opportunities' },
  { value: '1', label: 'Community' }
]

// ── Gallery items ────────────────────────────────────────────────────
const galleryItems = [
  { caption: 'Homecoming 2024 — Old students return to campus', category: 'Homecoming' },
  { caption: 'Old student visit to the school library', category: 'School Visit' },
  { caption: 'Library books donated by 2010 year group', category: 'Donations' },
  { caption: 'Career mentorship session with alumni', category: 'Mentorship' },
  { caption: 'ICT lab support project launch', category: 'Projects' },
  { caption: 'Year group reunion gathering on campus', category: 'Reunions' }
]

// ── Contact info ─────────────────────────────────────────────────────
const contactInfo = [
  {
    label: 'Alumni Office',
    value: 'School Administration, PRESEC Berekum',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>'
  },
  {
    label: 'Email',
    value: 'alumni@presecberekum.edu.gh (placeholder)',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>'
  },
  {
    label: 'WhatsApp Group',
    value: 'Contact admin for group link',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>'
  },
  {
    label: 'Social Media',
    value: 'Facebook / LinkedIn (coming soon)',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>'
  }
]

// Google Forms is linked directly to a response Sheet, avoiding Apps Script deployment issues.
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSc6hYvpcRF2YYEF0MfK7XVYhBX_nhNBS8Md2GJforcGOKu4PQ/formResponse'
const GOOGLE_FORM_FIELDS = {
  fullName: 'entry.713454210',
  yearCompletion: 'entry.412719263',
  programme: 'entry.1955099777',
  profession: 'entry.1663703841',
  location: 'entry.367691259',
  phone: 'entry.709190230',
  email: 'entry.1493901597',
  mentor: 'entry.1378869814',
  support: 'entry.1261050673',
  message: 'entry.1342396445'
}
const GOOGLE_FORM_OPTIONAL_FIELDS = {
  gender: 'entry.1702792532'
}

const IFRAME_NAME = 'alumni-registration-target'
const SUBMISSION_TIMEOUT_MS = 15000
const currentYear = new Date().getFullYear()

const registrationFormRef = ref(null)
const formSubmitted = ref(false)
const formError = ref('')
const formLoading = ref(false)
const waitingForFrameLoad = ref(false)
const submissionTimeoutId = ref(null)

const form = ref({
  fullName: '',
  gender: '',
  yearCompletion: '',
  programme: '',
  profession: '',
  location: '',
  phone: '',
  email: '',
  mentor: '',
  support: '',
  message: ''
})

function clearSubmissionTimeout() {
  if (submissionTimeoutId.value) {
    window.clearTimeout(submissionTimeoutId.value)
    submissionTimeoutId.value = null
  }
}

function resetForm() {
  form.value = {
    fullName: '',
    gender: '',
    yearCompletion: '',
    programme: '',
    profession: '',
    location: '',
    phone: '',
    email: '',
    mentor: '',
    support: '',
    message: ''
  }
}

function validateForm() {
  formError.value = ''

  if (!isGoogleFormsConfigured()) {
    formError.value = 'Alumni registration is not connected yet. Add the Google Form URL and entry IDs in Alumni.vue.'
    return false
  }

  if (!form.value.fullName.trim()) {
    formError.value = 'Please enter your full name.'
    return false
  }

  if (!form.value.gender.trim()) {
    formError.value = 'Please select your gender.'
    return false
  }

  if (!form.value.yearCompletion) {
    formError.value = 'Please enter your year of completion.'
    return false
  }

  const completionYear = Number(form.value.yearCompletion)
  if (Number.isNaN(completionYear) || completionYear < 1960 || completionYear > currentYear) {
    formError.value = `Please enter a valid completion year between 1960 and ${currentYear}.`
    return false
  }

  if (!form.value.programme.trim()) {
    formError.value = 'Please select the programme studied.'
    return false
  }

  if (form.value.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email.trim())) {
    formError.value = 'Please enter a valid email address.'
    return false
  }

  if (!form.value.email.trim() && !form.value.phone.trim()) {
    formError.value = 'Please provide at least an email address or phone number.'
    return false
  }

  return true
}

function isGoogleFormsConfigured() {
  const hasActionUrl = GOOGLE_FORM_ACTION.includes('/formResponse') && !GOOGLE_FORM_ACTION.includes('PASTE_GOOGLE_FORM_ID_HERE')
  const hasEntryIds = Object.values(GOOGLE_FORM_FIELDS).every((fieldName) => {
    return /^entry\.\d+$/.test(fieldName) && !fieldName.startsWith('entry.000000000')
  })

  return hasActionUrl && hasEntryIds
}

function submitForm() {
  if (!validateForm()) return

  formLoading.value = true
  waitingForFrameLoad.value = true

  clearSubmissionTimeout()
  submissionTimeoutId.value = window.setTimeout(() => {
    waitingForFrameLoad.value = false
    formLoading.value = false
    formError.value = 'The submission is taking longer than expected. Please check your connection and try again.'
  }, SUBMISSION_TIMEOUT_MS)

  if (!registrationFormRef.value) {
    clearSubmissionTimeout()
    waitingForFrameLoad.value = false
    formLoading.value = false
    formError.value = 'The registration form could not be submitted. Please refresh the page and try again.'
    return
  }

  registrationFormRef.value.submit()
}

function handleSubmissionFrameLoad() {
  if (!waitingForFrameLoad.value) return

  clearSubmissionTimeout()
  waitingForFrameLoad.value = false
  formLoading.value = false
  formSubmitted.value = true
  resetForm()
}

onBeforeUnmount(() => {
  clearSubmissionTimeout()
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
