# 🚀 Quick Start Guide - Dar Al Bitcoin

## Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

This will install:
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Lucide React (icons)

### 2. Start Development Server
```bash
npm run dev
```

The site will be available at: `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```

Production files will be in the `dist/` folder.

## 🎨 Customization Guide

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  navy: { ... },      // Main dark colors
  bitcoin: { ... },   // Orange accent colors
  gold: { ... }       // Islamic gold accents
}
```

### Update Content
- **Homepage**: `src/pages/Home.jsx` and `src/components/home/`
- **About**: `src/pages/About.jsx`
- **Formation**: `src/pages/Formation.jsx`
- **Blog**: `src/pages/Blog.jsx`
- **Events**: `src/pages/Events.jsx`
- **Contact**: `src/pages/Contact.jsx`

### Replace Images
Images are currently using Unsplash placeholders. Replace with your own:
1. Add images to `public/images/`
2. Update image URLs in components
3. Use format: `/images/your-image.jpg`

### Modify Navigation
Edit `src/components/Header.jsx` to add/remove menu items.

### Update Footer
Edit `src/components/Footer.jsx` for footer links and content.

## 📱 Testing Responsive Design

The site is fully responsive. Test at:
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px

## 🎯 Key Features to Customize

### 1. Arabic Text
Update Arabic quotes in:
- `src/components/home/HeroSection.jsx`
- `src/components/home/ComparisonSection.jsx`

### 2. Training Modules
Edit modules in:
- `src/components/home/TrainingSection.jsx`
- `src/pages/Formation.jsx`

### 3. Blog Articles
Add/edit articles in:
- `src/pages/Blog.jsx` (articles array)

### 4. Events
Update events in:
- `src/pages/Events.jsx` (upcomingEvents array)

### 5. Testimonials
Edit testimonials in:
- `src/components/home/TestimonialsSection.jsx`

## 🔧 Common Tasks

### Add a New Page
1. Create file in `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`:
```javascript
<Route path="/new-page" element={<NewPage />} />
```
3. Add link in `src/components/Header.jsx`

### Add Animation
Use Framer Motion:
```javascript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Your content
</motion.div>
```

### Add Icon
Import from Lucide React:
```javascript
import { IconName } from 'lucide-react'
<IconName size={24} />
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Build: `npm run build`
2. Publish directory: `dist`
3. Deploy

### Manual Hosting
1. Run `npm run build`
2. Upload `dist/` folder to your server
3. Configure server for SPA routing

## 📊 Performance Tips

1. **Optimize Images**: Use WebP format, compress images
2. **Lazy Loading**: Images load as needed
3. **Code Splitting**: React Router handles this
4. **Caching**: Configure in hosting platform

## 🐛 Troubleshooting

### Port Already in Use
Change port in `vite.config.js`:
```javascript
server: {
  port: 3001
}
```

### Build Errors
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Run `npm run build`

### Styling Issues
1. Check Tailwind classes are correct
2. Ensure `index.css` is imported in `main.jsx`
3. Clear browser cache

## 📞 Support

Need help? Contact: contact@daralbitcoin.com

## 🎉 You're Ready!

Your professional Bitcoin education website is ready to launch!

Key URLs:
- Home: `/`
- About: `/qui-sommes-nous`
- Formation: `/formation`
- Blog: `/blog`
- Events: `/evenements`
- Contact: `/contact`
