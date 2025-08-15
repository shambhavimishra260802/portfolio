# Deploying to Vercel

Your portfolio is now ready for deployment on Vercel! Here's how to deploy it:

## Step 1: Prepare Your Project

1. **Push your code to GitHub:**
   - Create a new repository on GitHub
   - Push your portfolio code to the repository
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

## Step 2: Deploy on Vercel

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account

2. **Import your project:**
   - Click "New Project"
   - Select your portfolio repository from GitHub
   - Vercel will automatically detect it as a Node.js project

3. **Configure build settings:**
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

## Step 3: Environment Variables (Optional)

If you want the contact form to send emails, add these environment variables in Vercel:

1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your Gmail app password
   - `DATABASE_URL`: Your Neon database URL (if using database)

## Step 4: Deploy

1. Click "Deploy" in Vercel
2. Wait for the build to complete
3. Your portfolio will be live at `your-project-name.vercel.app`

## Features Ready for Production:

✅ **Responsive Design** - Works on all devices
✅ **Professional Animations** - Subtle and elegant
✅ **Contact Form** - Functional email sending
✅ **Skills Showcase** - Organized display of expertise
✅ **Project Portfolio** - Featured work display
✅ **Work Experience** - Professional timeline
✅ **Education Section** - Academic background
✅ **SEO Optimized** - Ready for search engines

## Custom Domain (Optional)

After deployment, you can add a custom domain:
1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to configure DNS

Your portfolio is production-ready with professional design, working contact form, and optimal performance!