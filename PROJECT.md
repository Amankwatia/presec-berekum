# 🧠 AI MASTER PROMPT — PRESEC, BEREKUM SCHOOL WEBSITE

*(Vue 3 + Vite + Tailwind CSS + GitHub)*

**Role:**
You are an expert frontend engineer and UI/UX designer specializing in Vue 3, Tailwind CSS, and Vite. Your task is to design and build a **modern, elegant, and responsive front-facing school website** for **PRESEC, Berekum** — a prestigious educational institution in Ghana.

---

## 🏫 PROJECT OVERVIEW

Build a professional, clean, and informative website for **PRESEC, Berekum** that highlights its academic excellence, facilities, programs, and admission details.
The website will serve parents, students, and visitors looking for information about the school.

---

## 💻 TECH STACK

* **Framework:** Vue 3 (Composition API)
* **Bundler:** Vite
* **Styling:** Tailwind CSS
* **Icons:** Heroicons or Lucide Icons
* **Animations:** AOS (Animate On Scroll) or VueUse Motion
* **Routing:** Vue Router
* **Deployment:** GitHub Pages or GitHub Actions
* **Font:** Inter or Poppins (Google Fonts)

---

## 🎨 BRANDING & COLORS

* **Primary color:** Navy Blue `#001F3F`
* **Secondary color:** White `#FFFFFF`
* **Accent color:** Muted Red `#C0392B`
* **Design style:** Minimal, academic, modern, with soft gradients and subtle transitions
* **Feel:** Calm, trustworthy, scholarly

Use navy blue primarily for headers, red only for highlights and buttons, and maintain ample white space for minimalism.

---

## 🧭 SITE STRUCTURE & PAGES

### 1. **Home Page**

* Hero section:

  * School name: **PRESEC, Berekum**
  * Motto: *"Determination and Perseverance"*
  * Background image of campus or students (placeholder)
  * CTA button: "Learn More" or "Apply Now"
* Quick summary about the school (3–4 lines)
* Facilities image grid or carousel (e.g., classrooms, dormitories, labs)
* Announcements or latest news cards
* Footer with contact details, social links, and copyright

### 2. **About Page**

* Mission, Vision, and Core Values sections
* Brief history of PRESEC, Berekum
* Leadership section (Headmaster, management team cards)
* Motto & school anthem section (optional multimedia block)

### 3. **Academics Page**

* Academic departments overview (Science, Arts, Business, etc.)
* Curriculum summary
* Achievements or awards timeline

### 4. **Admissions Page**

* Step-by-step admission process
* Admission requirements
* Downloadable prospectus (placeholder link)
* Button for "Apply Now" (future integration to Laravel backend)

### 5. **Gallery Page**

* Photo grid with lightbox view
* Filterable categories: *Events, Campus, Students, Awards*

### 6. **News & Events Page**

* List of posts with image, title, short description, and "Read More"
* Dynamic single post layout

### 7. **Contact Page**

* Contact form (name, email, message fields)
* School address, email, phone number
* Embedded Google Map showing school location

---

## ⚙️ FUNCTIONAL REQUIREMENTS

* Use Vue Router for page navigation
* Global header & footer components
* Scroll animations using AOS
* Loading spinner during page transitions
* SEO-friendly meta tags in `index.html`
* Responsive layout (mobile-first)
* Accessible color contrast and alt texts
* Commented code for easy maintenance

---

## 🚀 DEPLOYMENT

* Initialize GitHub repository
* Run `npm run build` for production
* Deploy using GitHub Pages or Actions
* Provide deployment instructions in README

---

## 🧱 FILE STRUCTURE EXAMPLE

```
src/
├─ assets/
├─ components/
│  ├─ Navbar.vue
│  ├─ Footer.vue
│  ├─ HeroSection.vue
├─ pages/
│  ├─ Home.vue
│  ├─ About.vue
│  ├─ Academics.vue
│  ├─ Admissions.vue
│  ├─ Gallery.vue
│  ├─ News.vue
│  ├─ Contact.vue
├─ router/
│  ├─ index.js
├─ App.vue
├─ main.js
```

---

## 📢 TEXT CONTENT (USE FOR DEMO)

**School Name:** PRESEC, Berekum
**Motto:** Determination and Perseverance
**Tagline Example:** "Shaping minds for a brighter tomorrow."
**About Text Example:**

> PRESEC, Berekum, stands as a beacon of academic excellence and discipline in Ghana's educational landscape. Guided by the principles of *Determination and Perseverance*, the school nurtures students to become responsible leaders and innovators in society.

---

## 🗣️ TONE & FEEL

* Academic and professional
* Minimal but elegant visuals
* Subtle animations (fade-in, slide-up)
* Balanced color palette with clean white backgrounds

---

## 🧠 AI TASK INSTRUCTION

> Using the above project details, build the **complete front-facing school website for PRESEC, Berekum** with Vue 3, Vite, and Tailwind CSS.
> Generate all core pages, reusable components, and routing configuration.
> Apply the specified colors (navy blue, white, red) with minimalist aesthetic.
> Add placeholder content and images where appropriate.
> Prepare the code for GitHub Pages deployment, including a README file with setup and deployment steps.
