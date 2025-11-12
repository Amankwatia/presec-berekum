# 🚀 Quick Setup Guide

## Initial Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
presec/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment
├── public/                   # Static assets
├── src/
│   ├── assets/              # Images, fonts
│   ├── components/          # Reusable components
│   │   ├── Navbar.vue
│   │   ├── Footer.vue
│   │   └── HeroSection.vue
│   ├── pages/               # Page components
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   ├── Academics.vue
│   │   ├── Admissions.vue
│   │   ├── Gallery.vue
│   │   ├── News.vue
│   │   └── Contact.vue
│   ├── router/
│   │   └── index.js         # Route definitions
│   ├── App.vue              # Root component
│   ├── main.js              # Entry point
│   └── style.css            # Global styles
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── PROJECT.md               # Project specifications
└── README.md                # Documentation
```

## 🎨 Customization

### Colors (tailwind.config.js)
- Navy: `#001F3F`
- Muted Red: `#C0392B`

### Typography
- Primary Font: Inter (from Google Fonts)

## 🌐 Deployment

### Option 1: GitHub Actions (Recommended)
1. Push code to GitHub
2. Enable GitHub Pages in repository settings
3. Workflow will automatically deploy on push to main

### Option 2: Manual GitHub Pages
```bash
npm run build
gh-pages -d dist
```

### Option 3: Netlify/Vercel
- Connect your GitHub repository
- Build command: `npm run build`
- Publish directory: `dist`

## 🔧 Configuration

### Base URL
Update `vite.config.js` if deploying to a subdirectory:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

### Environment Variables
Create `.env` file for environment-specific configs:
```
VITE_API_URL=https://api.example.com
```

## 📝 Development Tips

1. **Hot Module Replacement (HMR)** - Changes reflect instantly
2. **Component DevTools** - Use Vue DevTools browser extension
3. **Tailwind IntelliSense** - Install VS Code extension for autocomplete

## 🐛 Troubleshooting

### Port Already in Use
Vite will automatically try the next available port.

### Build Errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Tailwind Not Working
Ensure `style.css` is imported in `main.js`

## 📚 Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vue Router](https://router.vuejs.org/)

---

**Built for PRESEC, Berekum** 🏫
