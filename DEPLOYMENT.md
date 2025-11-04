# 🚀 Deployment Guide - Dar Al Bitcoin

## Pre-Deployment Checklist

- [ ] All content reviewed and finalized
- [ ] Images optimized (WebP format, compressed)
- [ ] Arabic text verified
- [ ] Contact form connected to backend/service
- [ ] Newsletter signup connected
- [ ] Analytics added (Google Analytics, etc.)
- [ ] SEO meta tags verified
- [ ] Social media links updated
- [ ] Favicon added
- [ ] 404 page created
- [ ] Privacy policy and legal pages added

## Option 1: Vercel (Recommended) ⭐

### Why Vercel?
- Automatic deployments from Git
- Free SSL certificate
- Global CDN
- Excellent performance
- Zero configuration for Vite

### Steps:

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Deploy on Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "Import Project"
- Select your GitHub repository
- Vercel auto-detects Vite configuration
- Click "Deploy"

3. **Custom Domain**
- Go to Project Settings → Domains
- Add your custom domain (e.g., daralbitcoin.com)
- Update DNS records as instructed

### Environment Variables (if needed)
```
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=contact@daralbitcoin.com
```

## Option 2: Netlify

### Steps:

1. **Build the project**
```bash
npm run build
```

2. **Deploy via Netlify CLI**
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

Or drag & drop the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)

### netlify.toml Configuration
Create `netlify.toml` in root:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Option 3: GitHub Pages

### Steps:

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json**
```json
{
  "homepage": "https://yourusername.github.io/dar-al-bitcoin",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Deploy**
```bash
npm run deploy
```

4. **Configure vite.config.js**
```javascript
export default defineConfig({
  base: '/dar-al-bitcoin/',
  // ... rest of config
})
```

## Option 4: Traditional Hosting (cPanel, etc.)

### Steps:

1. **Build the project**
```bash
npm run build
```

2. **Upload files**
- Upload contents of `dist/` folder to your server
- Typically to `public_html` or `www` directory

3. **Configure .htaccess** (for Apache)
Create `.htaccess` in root:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Post-Deployment Tasks

### 1. Setup Analytics

**Google Analytics**
Add to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. Setup Contact Form

**Option A: EmailJS**
```bash
npm install @emailjs/browser
```

**Option B: Formspree**
Update form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option C: Custom Backend**
Create API endpoint and connect to form.

### 3. Setup Newsletter

**Option A: Mailchimp**
- Create Mailchimp account
- Get embedded form code
- Add to NewsletterSection.jsx

**Option B: ConvertKit**
- Similar to Mailchimp
- Better for creators

### 4. SSL Certificate

Most modern hosts provide free SSL (Let's Encrypt).

If not:
- Cloudflare (free SSL + CDN)
- Let's Encrypt (free)
- Paid SSL certificate

### 5. Performance Optimization

**Enable Compression**
Most hosts enable this by default.

**CDN Setup**
- Cloudflare (free tier available)
- Improves global loading speed

**Image Optimization**
- Use WebP format
- Compress images (TinyPNG, Squoosh)
- Lazy loading (already implemented)

### 6. SEO Setup

**Google Search Console**
1. Verify ownership
2. Submit sitemap: `https://yourdomain.com/sitemap.xml`

**Create sitemap.xml**
Add to `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://daralbitcoin.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://daralbitcoin.com/qui-sommes-nous</loc>
    <priority>0.8</priority>
  </url>
  <!-- Add all pages -->
</urlset>
```

**robots.txt**
Add to `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://daralbitcoin.com/sitemap.xml
```

### 7. Social Media Meta Tags

Already included in `index.html`, but verify:
- Open Graph tags (Facebook)
- Twitter Card tags
- Correct images and descriptions

### 8. Monitoring

**Uptime Monitoring**
- UptimeRobot (free)
- Pingdom

**Error Tracking**
- Sentry
- LogRocket

**Performance Monitoring**
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

## Domain Configuration

### DNS Records

**For Vercel/Netlify:**
```
Type: A
Name: @
Value: [Provided by host]

Type: CNAME
Name: www
Value: [Provided by host]
```

**Email Setup (if needed):**
```
Type: MX
Priority: 10
Value: mail.yourdomain.com
```

## Continuous Deployment

### Automatic Deployments

**Vercel/Netlify:**
- Automatically deploys on git push to main branch
- Preview deployments for pull requests

**GitHub Actions:**
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Backup Strategy

1. **Code**: Backed up on GitHub
2. **Database** (if applicable): Regular backups
3. **Media Files**: Cloud storage (S3, Cloudinary)

## Security Checklist

- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] CORS properly configured
- [ ] Rate limiting on forms
- [ ] Input validation
- [ ] XSS protection
- [ ] CSRF protection (if using forms)

## Launch Checklist

- [ ] Test all pages on mobile
- [ ] Test all pages on desktop
- [ ] Test all forms
- [ ] Test all links
- [ ] Verify analytics working
- [ ] Check page load speed
- [ ] Verify SEO meta tags
- [ ] Test on different browsers
- [ ] Check accessibility (WCAG)
- [ ] Verify social media sharing
- [ ] Test newsletter signup
- [ ] Check contact form delivery

## Post-Launch

1. **Announce on social media**
2. **Email existing community**
3. **Submit to directories**
4. **Monitor analytics**
5. **Gather feedback**
6. **Iterate and improve**

## Support

For deployment issues:
- Vercel: [vercel.com/support](https://vercel.com/support)
- Netlify: [netlify.com/support](https://netlify.com/support)
- GitHub: [docs.github.com](https://docs.github.com)

---

**Ready to launch? Let's go! 🚀**
