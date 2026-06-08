# Deployment Guide

Complete guide to deploy your portfolio website to production.

## 🚀 Quick Deployment Options

### 1. Vercel (Recommended - Easiest)

Vercel is built by the creators of Next.js and provides the best integration.

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Custom Domain**
   - In Vercel Dashboard → Project Settings → Domains
   - Add your custom domain
   - Update DNS records with provided values

**Benefits:**
- Zero-config deployment
- Automatic builds on push
- Edge network globally
- Free SSL certificate
- Environment variables support
- Preview deployments

### 2. Netlify

Great alternative with good Next.js support.

**Steps:**

1. **Push to GitHub** (same as above)

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect GitHub
   - Select your repository

3. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Leave Deploy settings as is for Next.js

4. **Deploy**
   - Click "Deploy"
   - Netlify automatically builds and deploys

**Custom Domain:**
- Domains section → Add domain
- Update DNS settings as shown

### 3. Traditional VPS/Server (AWS, DigitalOcean, Linode)

For more control and custom configurations.

**Prerequisites:**
- Ubuntu 20.04 LTS or similar
- Node.js 18+
- npm or yarn
- Domain name

**Setup Steps:**

1. **SSH into your server**
   ```bash
   ssh root@your_server_ip
   ```

2. **Install Node.js and npm**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone repository**
   ```bash
   cd /var/www
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   cd portfolio
   ```

4. **Install dependencies**
   ```bash
   npm install
   npm run build
   ```

5. **Setup PM2 (Process Manager)**
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

6. **Setup Nginx as Reverse Proxy**
   ```bash
   sudo apt-get install nginx
   sudo nano /etc/nginx/sites-available/default
   ```

   Configure:
   ```nginx
   server {
       listen 80;
       server_name your_domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

7. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d your_domain.com
   ```

8. **Restart Nginx**
   ```bash
   sudo systemctl restart nginx
   ```

### 4. Docker Container Deployment

Deploy using Docker for consistency across environments.

**Dockerfile:**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

**Build and Run:**
```bash
docker build -t portfolio:latest .
docker run -p 3000:80 portfolio:latest
```

**Push to Docker Hub:**
```bash
docker tag portfolio:latest YOUR_USERNAME/portfolio:latest
docker push YOUR_USERNAME/portfolio:latest
```

## 🌐 Domain Configuration

### Setting up Custom Domain

#### With Vercel:
1. Project Settings → Domains
2. Add your domain
3. Update DNS at your registrar (GoDaddy, Namecheap, etc.)

DNS Records to add:
```
Type: A
Name: @
Value: 76.76.19.165

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### With Netlify:
Similar process in Domains section

#### With Traditional Server:
Point A record to your server IP:
```
Type: A
Name: @
Value: YOUR_SERVER_IP
```

## 🔐 Environment Variables

### Vercel/Netlify:
1. Project Settings → Environment Variables
2. Add your variables:
   ```
   NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
   ```

### Traditional Server:
Create `.env.production`:
```bash
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
```

## 📊 Performance Optimization

Before deploying:

1. **Run Lighthouse Audit**
   ```bash
   npm install -g lighthouse
   npm run build
   npm start
   # Open DevTools → Lighthouse → Analyze page load
   ```

2. **Check Core Web Vitals**
   - Use [web.dev](https://web.dev/measure/)
   - Verify all metrics are green

3. **Image Optimization**
   - Use Next.js Image component
   - Ensure images are compressed
   - Use WebP format where possible

## 🔄 Continuous Deployment

### GitHub Actions (for Traditional Servers)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Server

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - run: npm install
      - run: npm run build
      
      - name: Deploy to server
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SERVER_SSH_KEY }}
          script: |
            cd /var/www/portfolio
            git pull origin main
            npm install
            npm run build
            pm2 restart portfolio
```

## 📈 Post-Deployment

### Monitor Your Site

1. **Setup Google Analytics**
   - Add to `layout.tsx`
   - Track visitor behavior

2. **Google Search Console**
   - Verify ownership
   - Submit sitemap
   - Monitor indexing

3. **Error Tracking**
   - Setup Sentry for error monitoring
   - Get alerts on issues

4. **Uptime Monitoring**
   - Use services like Uptime Robot
   - Get alerts if site goes down

## 🚀 Deployment Checklist

- [ ] All content updated with your information
- [ ] Contact form integrated with email service
- [ ] Environment variables configured
- [ ] Images optimized and compressed
- [ ] SEO meta tags verified
- [ ] Domain connected and DNS configured
- [ ] SSL certificate installed
- [ ] Lighthouse score above 95
- [ ] Core Web Vitals all green
- [ ] Mobile responsiveness tested
- [ ] Cross-browser testing completed
- [ ] Analytics setup
- [ ] Search Console connected
- [ ] Uptime monitoring enabled

## 🔧 Maintenance

### Regular Updates

```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Update major versions carefully
npm install package@latest
```

### Backups

- GitHub serves as backup
- For databases, setup automated backups
- Regular security updates

### Monitoring

- Check analytics weekly
- Review error logs
- Monitor performance metrics
- Update content regularly

## ⚠️ Troubleshooting

### Build Fails on Deployment

1. Check build logs
2. Verify all dependencies in package.json
3. Check environment variables
4. Ensure Node.js version matches

### Site Not Loading

1. Check DNS propagation (DNS checker tools)
2. Verify server is running
3. Check reverse proxy configuration
4. Review firewall rules

### Performance Issues

1. Run Lighthouse audit
2. Check image optimization
3. Review API calls
4. Check database queries

## 📞 Support

For deployment issues:
- Check framework documentation
- Review service provider support
- Check GitHub Issues
- Contact hosting provider support

---

Happy deploying! 🎉
