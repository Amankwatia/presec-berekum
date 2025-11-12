# PRESEC, Berekum - School Website

A modern, elegant, and responsive front-facing school website for **PRESEC, Berekum** built with **Vue 3**, **Vite**, and **Tailwind CSS**.

![PRESEC, Berekum](https://img.shields.io/badge/PRESEC-Berekum-001F3F?style=for-the-badge)
![Vue 3](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite)

## 🏫 About

This website serves as the official front-facing portal for PRESEC, Berekum - a prestigious educational institution in Ghana. The website highlights the school's academic excellence, facilities, programs, and admission details.

**Motto:** *"Determination and Perseverance"*

## ✨ Features

- **Responsive Design** - Mobile-first approach, works seamlessly on all devices
- **Modern UI/UX** - Clean, minimalist design with smooth animations
- **SEO Optimized** - Meta tags and semantic HTML for better search engine visibility
- **Fast Performance** - Built with Vite for lightning-fast development and optimized builds
- **Smooth Animations** - AOS (Animate On Scroll) for elegant page transitions
- **7 Core Pages** - Home, About, Academics, Admissions, Gallery, News, Contact
- **Component-Based** - Reusable Vue 3 components for easy maintenance

## 🎨 Design

- **Primary Color:** Navy Blue `#001F3F`
- **Secondary Color:** White `#FFFFFF`
- **Accent Color:** Muted Red `#C0392B`
- **Typography:** Inter (Google Fonts)
- **Style:** Minimal, academic, modern with soft gradients

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/presec-berekum.git
   cd presec-berekum
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

## 📦 Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## 🌐 Deployment

### GitHub Pages

1. **Update `vite.config.js`** with your repository name:
   ```javascript
   export default defineConfig({
     base: '/presec-berekum/', // Replace with your repo name
     // ... rest of config
   })
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**
   ```bash
   # Install gh-pages if not already installed
   npm install -g gh-pages
   
   # Deploy
   gh-pages -d dist
   ```

4. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to Pages
   - Set source to `gh-pages` branch
   - Save and wait for deployment

### Alternative: Using GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 📁 Project Structure

```
presec/
├── public/                # Static assets
├── src/
│   ├── assets/           # Images, fonts, etc.
│   ├── components/       # Reusable Vue components
│   │   ├── Navbar.vue
│   │   ├── Footer.vue
│   │   └── HeroSection.vue
│   ├── pages/            # Page components
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   ├── Academics.vue
│   │   ├── Admissions.vue
│   │   ├── Gallery.vue
│   │   ├── News.vue
│   │   └── Contact.vue
│   ├── router/           # Vue Router configuration
│   │   └── index.js
│   ├── App.vue           # Root component
│   ├── main.js           # Application entry point
│   └── style.css         # Global styles (Tailwind)
├── index.html            # HTML entry point
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── PROJECT.md            # Project specifications
└── README.md             # This file
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Vue 3 | Frontend framework (Composition API) |
| Vite | Build tool and dev server |
| Tailwind CSS | Utility-first CSS framework |
| Vue Router | Client-side routing |
| AOS | Scroll animations |
| Heroicons | Icon library |

## 📄 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## 🎯 Pages Overview

1. **Home** - Hero section, school summary, facilities, announcements
2. **About** - Mission, vision, values, history, leadership
3. **Academics** - Departments, curriculum, achievements
4. **Admissions** - Process, requirements, prospectus download
5. **Gallery** - Photo grid with filterable categories and lightbox
6. **News** - Latest news, upcoming events, newsletter signup
7. **Contact** - Contact form, information, map integration

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contact

**PRESEC, Berekum**
- Email: info@presecberekum.edu.gh
- Phone: +233 123 456 789
- Location: Berekum, Bono Region, Ghana

## 🙏 Acknowledgments

- **PRESEC, Berekum** - For the opportunity to build this website
- **Vue.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **AOS Library** - For beautiful scroll animations

---

**Built with ❤️ for PRESEC, Berekum**

*Determination and Perseverance*
