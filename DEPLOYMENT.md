# Deployment Guide - Simplilearn Executive Roundtable

## Pre-Deployment Checklist

- [x] All TypeScript errors resolved
- [x] Build passes locally (`npm run build`)
- [x] No console warnings
- [x] Forms tested and working
- [x] Mobile responsiveness verified
- [x] Environment variables configured
- [x] All images present in `/public`
- [x] Git repository initialized

## Vercel Deployment (Recommended)

### Method 1: Vercel Dashboard (Easiest)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select the Simplilearn repository
   - Click "Import"

3. **Configure Environment Variables**
   - In the "Environment Variables" section, add:
     - `AIRTABLE_API_KEY`: Your Personal Access Token
     - `AIRTABLE_BASE_ID`: Your Airtable Base ID
     - `AIRTABLE_TABLE_NAME`: `RSVPs` (or your table name)

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Your site is live at `https://your-project.vercel.app`

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Answer prompts (project name, framework detection, etc.)
   - Select "Yes" to save default settings

4. **Add Environment Variables**
   ```bash
   vercel env add AIRTABLE_API_KEY
   vercel env add AIRTABLE_BASE_ID
   vercel env add AIRTABLE_TABLE_NAME
   ```

5. **Deploy Production**
   ```bash
   vercel --prod
   ```

## Alternative: AWS Amplify

1. Push to GitHub/GitLab
2. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
3. Click "Create app"
4. Select Git provider and repository
5. Configure build settings (auto-detected for Next.js)
6. Add environment variables in deployment settings
7. Deploy

## Alternative: Railway.app

1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub"
4. Choose your repository
5. Add environment variables in project settings
6. Deploy automatically

## Domain Setup

### For Vercel
1. In Vercel dashboard, go to "Domains"
2. Click "Add Domain"
3. Enter your domain name
4. Follow DNS configuration steps for your registrar
5. Typical DNS records needed:
   - `A` record pointing to Vercel's IP
   - Or `CNAME` record pointing to `cname.vercel.app`

### For Other Platforms
Contact provider for specific domain configuration steps.

## Post-Deployment Verification

After deployment, verify:

1. **Site loads** - Visit your domain/URL
2. **Form works** - Submit test email to Airtable
3. **Images load** - All images visible
4. **No console errors** - Check browser dev tools
5. **Mobile responsive** - Test on mobile device
6. **Analytics work** (if configured)

## Monitoring & Logs

### Vercel
- View logs in Vercel dashboard
- CLI: `vercel logs <deployment-url>`

### Environment Issues
If form not working in production:
1. Check environment variables in dashboard
2. Verify Airtable API key is valid
3. Ensure table exists and key has access
4. Check deployment logs for errors

## Rollback

If deployment has issues:

### Vercel
1. Go to "Deployments" tab
2. Find previous working deployment
3. Click "Promote to Production"

## CI/CD Configuration

Vercel automatically deploys on:
- Push to main branch (production)
- Pull requests (preview deployments)

To customize:
1. Create `vercel.json` in root (already present)
2. Add build commands, rewrites, redirects as needed

## Performance Optimization

After deployment:
1. Check [Vercel Analytics](https://vercel.com/analytics)
2. Check Core Web Vitals
3. Monitor TTFB (Time to First Byte)
4. Check image optimization metrics

## Troubleshooting

### Site not loading
- Check Vercel deployment logs
- Verify all environment variables set
- Check Network tab in browser dev tools

### Forms not submitting
- Verify AIRTABLE_API_KEY in dashboard
- Check Airtable API key is valid/not revoked
- Review function logs in Vercel
- Test API key locally first

### Images not showing
- Verify `/public` folder synced to repo
- Check image filenames match
- Clear browser cache

### Build failing
- Check build logs in Vercel dashboard
- Run `npm run build` locally
- Verify all dependencies in package.json
- Check for TypeScript errors: `npx tsc --noEmit`

## Database Airtable Setup

Before going live, ensure Airtable is configured:

1. **Create Airtable Account** - https://airtable.com
2. **Create Base** - Your workspace for the event
3. **Create Table** - Named `RSVPs` (or your choice)
4. **Add Fields**:
   - `Email` (Single line text, required)
   - `Timestamp` (Automation timestamp field, auto-populated)
   - Any other tracking fields you need

5. **Create API Key**:
   - Go to https://airtable.com/create/tokens
   - Create new Personal Access Token
   - Scope: `data.records:read`, `data.records:write`
   - Select only your Base
   - Copy and save securely

6. **Get Base ID**:
   - Open your base in Airtable
   - Copy Base ID from URL: `app{YOUR_BASE_ID}`

## Security Checklist

- [x] API keys never in source code
- [x] .env.local in .gitignore
- [x] Environment variables set in deployment platform
- [x] HTTPS enforced (automatic on Vercel)
- [x] No sensitive data in frontend code
- [x] Server Actions validate input
- [x] Form handles errors gracefully

## Maintenance

After deployment:

1. **Monitor error rates** - Check Vercel logs weekly
2. **Track RSVP responses** - Monitor Airtable entries
3. **Update content** - Edit components and redeploy
4. **Renewal** - Update copyright dates as needed
5. **Backups** - Export Airtable data regularly

## Support & Help

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Airtable API**: https://airtable.com/api
- **Tailwind CSS**: https://tailwindcss.com/docs

---

**Deployment Status**: Ready for production
**Last Updated**: January 15, 2026
**Framework**: Next.js 16.1.1
**Target Platform**: Vercel (recommended)
