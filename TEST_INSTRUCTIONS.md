# Testing Instructions - Dar Al Bitcoin Modifications

## Quick Start

### 1. Install Dependencies (if not already installed)
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The site will be available at: `http://localhost:5173`

---

## Testing Checklist

### ✅ Logo Testing

**Header:**
1. Open homepage
2. Check logo displays in top-left corner
3. Verify logo is clear and properly sized
4. Test hover effect (should scale slightly)
5. Click logo - should navigate to homepage

**Footer:**
1. Scroll to bottom of any page
2. Verify logo displays in footer
3. Check logo clarity and size

---

### ✅ Homepage Testing

**Sections to Verify:**
1. ✅ **HeroSection** - Should be first section
2. ✅ **ProblemSection** - Should have:
   - Title: "Le Problème que Personne ne Vous Dit"
   - 3 problem cards
   - **2 CTA buttons at bottom:**
     - "Découvrir la Formation" → Should go to `/formation`
     - "Lire l'article complet" → Should go to `/blog/le-probleme-dont-personne-ne-vous-parle`
3. ✅ **JoinedMovementSection** - Should appear ONCE only
   - Title: "Ils ont rejoint le mouvement"
   - Stats section
   - Testimonials
4. ✅ **BlogSection** - Latest articles
5. ✅ **TestimonialsSection** - Customer reviews

**Sections that should NOT be on homepage:**
- ❌ "Exemple de ce que vous allez apprendre"
- ❌ "Tu as le droit de comprendre"
- ❌ "Fiat vs Bitcoin"
- ❌ Long detailed problem section

---

### ✅ Formation Page Testing

**Navigate to:** `/formation` or click "Formation" in menu

**Sections to Verify (in order):**
1. ✅ Hero Section
2. ✅ "Vous Avez un Problème" section
3. ✅ Modules section (expandable)
4. ✅ **"Exemple de ce que vous allez apprendre"** (moved from homepage)
   - Should have 6 module cards
   - Each with icon, title, and topics
5. ✅ **"Tu as le droit de comprendre"** (moved from homepage)
   - Dark background
   - 5 feature cards
   - CTA button
6. ✅ **"Fiat vs Bitcoin"** (moved from homepage)
   - Dark background
   - Two-column comparison
   - Red column (FIAT) vs Orange column (Bitcoin)
7. ✅ Training Overview Section
8. ✅ Features Section
9. ✅ Pricing Section
10. ✅ FAQ Section

---

### ✅ Blog Article Testing

**Test 1: Access from Homepage**
1. Go to homepage
2. Scroll to ProblemSection
3. Click "Lire l'article complet" button
4. Should navigate to: `/blog/le-probleme-dont-personne-ne-vous-parle`

**Test 2: Access from Blog Page**
1. Navigate to `/blog`
2. Find article "Le problème dont personne ne vous parle"
3. Should be featured article (first/large card)
4. Click on article
5. Should open full article

**Article Content to Verify:**
- ✅ Title: "Le problème dont personne ne vous parle"
- ✅ Category: "Finance Islamique"
- ✅ Author: "Dar Al Bitcoin"
- ✅ Sections:
  - Introduction
  - Les symptômes visibles
  - Le Riba invisible (with Quranic verse)
  - La confusion Crypto
  - Conclusion
- ✅ Share button works
- ✅ "Retour aux actualités" link works

---

### ✅ Navigation Testing

**Header Menu:**
1. Click "Qui sommes nous" → Should go to `/qui-sommes-nous`
2. Click "Actualités" → Should go to `/blog`
3. Click "Évènement" → Should go to `/evenements`
4. Click "Commencer ma formation" button → Should go to `/formation`

**Mobile Menu:**
1. Resize browser to mobile size (< 768px)
2. Click hamburger menu icon
3. Verify all menu items appear
4. Test each link
5. Verify menu closes after clicking

---

### ✅ Responsive Design Testing

**Test on different screen sizes:**

**Desktop (> 1024px):**
- All sections display in multi-column layout
- Logo and menu visible
- CTA buttons properly sized

**Tablet (768px - 1024px):**
- Sections adapt to 2-column layout
- Menu still visible
- Content readable

**Mobile (< 768px):**
- Single column layout
- Hamburger menu appears
- All content accessible
- Buttons stack vertically
- Logo remains visible

---

### ✅ Links and CTAs Testing

**Homepage CTAs:**
- [ ] Hero "Découvrir notre formation" → `/formation`
- [ ] Hero "Comprendre le problème" → `#problem`
- [ ] Problem "Découvrir la Formation" → `/formation`
- [ ] Problem "Lire l'article complet" → `/blog/le-probleme-dont-personne-ne-vous-parle`
- [ ] Joined Movement "Commencer maintenant" → `#formation`

**Formation Page CTAs:**
- [ ] "Rejoindre la prochaine session" → `#contact`
- [ ] "Voir le programme complet" → `#contact`
- [ ] "Rejoindre la Formation Maintenant" → `#contact`
- [ ] FormationSection "Commencer ma formation" → `/formation`
- [ ] FormationSection "Payer en Bitcoin" → External link

**Footer Links:**
- [ ] Social media links (Twitter, Instagram)
- [ ] Email link
- [ ] Telegram link
- [ ] "Mentions légales" → `/mentions-legales`
- [ ] "Politique de confidentialité" → `/politique-confidentialite`

---

### ✅ Visual Testing

**Colors:**
- Navy blue backgrounds: `#0A1628`, `#1A2B4A`
- Bitcoin orange: `#F7931A`, `#FF9500`
- Gold accents: `#D4AF37`

**Fonts:**
- Headers: Outfit (bold)
- Body: Inter
- Arabic text: Amiri

**Animations:**
- Hover effects on cards
- Button hover/tap effects
- Scroll animations
- Logo hover effect

---

### ✅ Performance Testing

1. Check page load speed
2. Verify images load properly
3. Test smooth scrolling
4. Check animation performance
5. Verify no console errors

---

## Common Issues to Check

### If Logo Doesn't Display:
- Check if `public/logo.webp` exists
- Verify file path in Header.jsx and Footer.jsx
- Clear browser cache
- Restart dev server

### If Sections Are Missing:
- Check imports in Home.jsx and Formation.jsx
- Verify component exports
- Check console for errors

### If Links Don't Work:
- Verify React Router setup
- Check path names match exactly
- Test with and without trailing slashes

### If Styling Looks Wrong:
- Clear browser cache
- Check Tailwind CSS is compiling
- Verify no CSS conflicts
- Test in different browsers

---

## Browser Testing

Test in multiple browsers:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

---

## Final Verification

Before considering testing complete:

1. [ ] All homepage sections display correctly
2. [ ] Formation page has all 3 moved sections
3. [ ] Blog article is accessible and complete
4. [ ] Logo displays in header and footer
5. [ ] All navigation links work
6. [ ] Mobile menu functions properly
7. [ ] No console errors
8. [ ] All CTAs link to correct pages
9. [ ] Responsive design works on all sizes
10. [ ] French content is unchanged

---

## Reporting Issues

If you find any issues:

1. Note the page URL
2. Describe what's wrong
3. Include browser and screen size
4. Take a screenshot if possible
5. Check browser console for errors

---

## Build for Production

When testing is complete:

```bash
npm run build
```

Then test the production build:

```bash
npm run preview
```

---

**Happy Testing! 🚀**
