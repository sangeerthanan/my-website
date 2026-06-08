# Getting Started - Quick Setup Guide

Welcome! This guide will help you get your portfolio website up and running in minutes.

## ✅ Prerequisites

Before starting, ensure you have:
- **Node.js 18+** installed ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **Git** installed (optional, for version control)
- **A code editor** (VS Code recommended)

## 🚀 Quick Start (5 minutes)

### 1. Open Terminal

Navigate to the project directory:
```bash
cd "c:\Users\Oculus\Documents\my website"
```

### 2. Install Dependencies

Run this command to install all required packages:
```bash
npm install
```

**Expected output:**
```
added 250+ packages in 45s
```

If you see any warnings, that's usually fine. Errors will be obvious.

### 3. Start Development Server

Run:
```bash
npm run dev
```

**Output will show:**
```
> next dev
  ▲ Next.js 15.0.0
  ▲ Local:        http://localhost:3000
```

### 4. View Your Website

Open your browser and go to:
```
http://localhost:3000
```

You should see the portfolio website loading!

## 📝 Customization (15 minutes)

### Update Your Information

Each section is in the `sections/` folder. Edit the text content:

**Hero Section** (`sections/Hero.tsx`)
```typescript
const titles = [
  'Your Title 1',
  'Your Title 2',
  'Your Title 3',
];
```

**About Section** (`sections/About.tsx`)
- Update timeline items
- Change company names
- Update descriptions

**Projects Section** (`sections/Projects.tsx`)
- Update project titles and descriptions
- Change GitHub links to your repos
- Update technology stacks

**Contact Section** (`sections/Contact.tsx`)
- Update phone number
- Update email
- Update location

### Example: Change Hero Title

1. Open `sections/Hero.tsx`
2. Find the line with titles array
3. Change text to your own
4. Save file (Ctrl+S)
5. Browser auto-refreshes!

## 🎨 Customize Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  background: '#050816',    // Dark background
  primary: '#00D9FF',       // Cyan accent
  secondary: '#7C3AED',     // Purple accent
  accent: '#00FFB2',        // Green accent
  'muted-text': '#A0AEC0',  // Gray text
}
```

Change hex colors to your preference. Browser refreshes automatically.

## 🔧 Build for Production

When ready to deploy:

```bash
npm run build
npm start
```

This creates an optimized production build.

## 📁 Project Structure at a Glance

```
sections/          → Page sections (Hero, About, Skills, etc.)
components/        → Reusable components (Navbar, Footer, etc.)
public/            → Static files (images, icons)
app/               → Next.js app files
  - page.tsx       → Main page
  - layout.tsx     → HTML structure
  - globals.css    → Global styles
```

## 🔍 Common Tasks

### Add a New Project

1. Open `sections/Projects.tsx`
2. Add new object to `projects` array:
```typescript
{
  title: 'Your Project',
  category: 'Category',
  description: 'Short description',
  longDescription: 'Detailed description',
  tech: ['Tech1', 'Tech2'],
  features: ['Feature 1', 'Feature 2'],
  github: 'https://github.com/yourusername/repo',
  live: 'https://demo.com',
  color: 'from-primary to-cyan-400',
}
```
3. Save and refresh browser

### Update Skills

1. Open `sections/Skills.tsx`
2. Modify `skillCategories` array
3. Add/remove skills from each category
4. Save and refresh

### Change Fonts

Edit `tailwind.config.ts`:
```typescript
fontFamily: {
  heading: ['Your Font', 'sans-serif'],
  body: ['Your Font', 'sans-serif'],
  mono: ['Your Font', 'monospace'],
}
```

## 🚨 Troubleshooting

### Port 3000 Already in Use

If you see "Port 3000 is in use":

**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID YOUR_PID /F
```

**Mac/Linux:**
```bash
lsof -ti:3000 | xargs kill -9
```

### Styles Not Updating

Clear Next.js cache:
```bash
rm -rf .next
npm run dev
```

### Module Not Found Error

Reinstall dependencies:
```bash
rm -rf node_modules
npm install
```

### Slow Build Times

This is normal for first build. Subsequent builds are faster.

## 📊 Performance Check

Check site performance:

1. Open DevTools (F12)
2. Click "Lighthouse"
3. Click "Analyze page load"
4. Target score: 95+

## 🌐 Ready to Deploy?

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions on:
- Vercel (easiest)
- Netlify
- Traditional servers
- Docker deployment

## 📚 Helpful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

## 💡 Pro Tips

1. **Use VS Code Extensions**
   - ES Lint
   - Prettier
   - Tailwind CSS IntelliSense

2. **Auto-format Code**
   ```bash
   npm run format
   ```

3. **Type Safety**
   ```bash
   npm run type-check
   ```

4. **Lint Check**
   ```bash
   npm run lint
   ```

## 🎯 Next Steps

1. ✅ Customize all text content
2. ✅ Update colors to match your brand
3. ✅ Add your projects
4. ✅ Setup contact form email
5. ✅ Deploy to production

## 📞 Need Help?

- Check README.md for detailed documentation
- Review the component comments
- Check framework documentation links
- Review error messages carefully

---

**Enjoy building your portfolio!** 🚀

Questions? Email: sangeerthananjhanan@gmail.com
