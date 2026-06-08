# Jeganathan Sangeerthanan - Premium Portfolio Website

A world-class, production-ready portfolio website for an Embedded Systems & IoT Engineer. Built with cutting-edge technologies and premium design principles.

## 🎨 Design Features

- **Dark Futuristic Theme**: Premium engineering aesthetic with glassmorphism effects
- **Responsive Design**: Mobile-first, optimized for all devices
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Custom Components**: Reusable, well-architected components
- **SEO Optimized**: Comprehensive metadata and structured data
- **Performance Focused**: Fast loading times and optimized assets

## 🛠️ Tech Stack

### Frontend
- **Next.js 15**: React framework for production
- **React 19**: Modern UI library
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icon library
- **Three.js**: 3D graphics (ready for integration)
- **Shadcn/UI**: Component library

### Development
- **ESLint**: Code quality
- **Prettier**: Code formatting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes

## 📦 Installation

### Prerequisites
- Node.js 18+ (Download from [nodejs.org](https://nodejs.org/))
- npm or yarn package manager

### Setup Instructions

1. **Navigate to the project directory**
   ```bash
   cd "c:\Users\Oculus\Documents\my website"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your settings if needed.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── favicon.ico         # Site favicon
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer component
│   ├── AnimatedBackground.tsx  # Animated particles
│   └── ScrollToTop.tsx     # Scroll to top button
├── sections/
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About timeline
│   ├── Skills.tsx          # Skills showcase
│   ├── Experience.tsx      # Experience timeline
│   ├── Projects.tsx        # Project showcase
│   ├── Github.tsx          # GitHub repos
│   ├── Certifications.tsx  # Certifications
│   └── Contact.tsx         # Contact form
├── public/
│   └── favicon.ico         # Website icon
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── tailwind.config.ts      # Tailwind config
├── next.config.js          # Next.js config
├── postcss.config.js       # PostCSS config
└── .eslintrc.json          # ESLint config
```

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Quality
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript

# Formatting
npm run format       # Format code with Prettier (if configured)
```

## 🎯 Key Sections

### Hero Section
- Dynamic animated title with multiple role variants
- Call-to-action buttons
- Animated background with particles
- Scroll indicator

### About Section
- Professional timeline
- Education and experience history
- Professional summary
- Engineering expertise overview

### Skills Section
- Categorized skill cards
- Animated proficiency bars
- Interactive hover effects
- Multiple technology domains

### Experience Section
- Timeline layout
- Key achievements
- Company details
- Project highlights

### Projects Section
- Featured project showcase
- Technology badges
- Project descriptions
- GitHub and demo links
- Detailed feature lists

### GitHub Section
- Auto-fetching repository cards
- Star and fork counts
- Language indicators
- Last updated timestamps

### Certifications Section
- Achievement cards
- Certification details
- Skill tags
- Statistics

### Contact Section
- Contact information display
- Working contact form with validation
- Email integration ready
- Social media links

## 🔧 Customization

### Update Personal Information
Edit the content in each section component:
- `sections/Hero.tsx` - Name and titles
- `sections/About.tsx` - Timeline and summary
- `sections/Skills.tsx` - Skills and proficiencies
- `sections/Experience.tsx` - Work experience
- `sections/Projects.tsx` - Project details
- `sections/Contact.tsx` - Contact information

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  background: '#050816',     // Primary background
  primary: '#00D9FF',        // Primary accent color
  secondary: '#7C3AED',      // Secondary accent
  accent: '#00FFB2',         // Accent color
  // ... more colors
}
```

### Update GitHub User
In `sections/Github.tsx`, change the username in the API call:
```typescript
`https://api.github.com/users/YOUR_USERNAME/repos`
```

## 📧 Email Configuration

The contact form is ready for email integration. Options:

### Option 1: SendGrid
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get API key
3. Create backend API route `/api/contact`
4. Use SendGrid SDK to send emails

### Option 2: Nodemailer (SMTP)
1. Set up SMTP credentials in `.env.local`
2. Create backend API route
3. Use Nodemailer to send emails

### Option 3: FormSubmit / Formspree
1. Simple no-backend solution
2. Free tier available
3. Add form endpoint to contact form

## 📱 Responsive Design

The website is fully responsive:
- Mobile: 320px and up
- Tablet: 768px and up
- Desktop: 1024px and up
- Large screens: 1280px and up

All animations and transitions are optimized for mobile devices.

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 🔍 SEO Optimization

- Meta tags for all pages
- Open Graph tags
- Twitter Card support
- Structured data ready
- Mobile-friendly design
- Fast Core Web Vitals

To check SEO:
- Use Google Lighthouse (DevTools)
- Google PageSpeed Insights
- SEO checker tools

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect GitHub to Vercel
3. Deploy automatically

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

### Traditional Hosting
1. Run `npm run build`
2. Deploy `.next` folder
3. Use Node.js runtime

### Docker
Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 Performance

Current targets:
- Lighthouse Score: 95+
- Core Web Vitals: All green
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

### Tailwind CSS not working
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### TypeScript errors
```bash
npm run type-check
```

## 📝 License

This project is the personal portfolio of Jeganathan Sangeerthanan. All rights reserved.

## 🤝 Support

For issues or questions:
- Email: sangeerthananjhanan@gmail.com
- GitHub: [Sangeerthanan](https://github.com/Sangeerthanan)
- LinkedIn: [Jeganathan Sangeerthanan](https://linkedin.com/in/jeganathan-sangeerthanan)

## 📚 Additional Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

### Tutorials
- [Next.js Tutorial](https://nextjs.org/learn)
- [React Hooks Guide](https://react.dev/reference/react)
- [Tailwind CSS Course](https://www.tailwindcss.com/docs)

---

Built with ❤️ using modern web technologies.
Last Updated: June 2026
