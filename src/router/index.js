import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Academics from '../pages/Academics.vue'
import Admissions from '../pages/Admissions.vue'
import Gallery from '../pages/Gallery.vue'
import News from '../pages/News.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'PRESEC, Berekum - Home',
      description: 'Welcome to PRESEC, Berekum - A beacon of academic excellence and discipline in Ghana.'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Us - PRESEC, Berekum',
      description: 'Learn about our mission, vision, and the rich history of PRESEC, Berekum.'
    }
  },
  {
    path: '/academics',
    name: 'Academics',
    component: Academics,
    meta: {
      title: 'Academics - PRESEC, Berekum',
      description: 'Explore our academic programs, departments, and achievements.'
    }
  },
  {
    path: '/admissions',
    name: 'Admissions',
    component: Admissions,
    meta: {
      title: 'Admissions - PRESEC, Berekum',
      description: 'Learn about the admission process and requirements for PRESEC, Berekum.'
    }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
    meta: {
      title: 'Gallery - PRESEC, Berekum',
      description: 'View photos from our campus, events, and student activities.'
    }
  },
  {
    path: '/news',
    name: 'News',
    component: News,
    meta: {
      title: 'News & Events - PRESEC, Berekum',
      description: 'Stay updated with the latest news and events at PRESEC, Berekum.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact Us - PRESEC, Berekum',
      description: 'Get in touch with PRESEC, Berekum. We would love to hear from you.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Update document title and meta tags on route change
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'PRESEC, Berekum'
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || '')
  }
  
  next()
})

export default router
