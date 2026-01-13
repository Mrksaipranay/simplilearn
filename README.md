# Simplilearn AI Era Roundtable

A pixel-perfect Next.js implementation of the Simplilearn landing page design.

## Features

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom design system
- **Components**: Modular, reusable components with Shadcn UI primitives
- **Animations**: Framer Motion for smooth entrances and interactions
- **Forms**: Server Actions for RSVP submission
- **Backend**: Airtable integration for data persistence

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env.local` file for Airtable integration (optional for dev, required for real data):
   ```
   AIRTABLE_API_KEY=your_api_key
   AIRTABLE_BASE_ID=your_base_id
   AIRTABLE_TABLE_NAME=RSVPs
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Building for Production & Deployment

### Deploying to Vercel (Recommended)

1. **Push to GitHub/GitLab/Bitbucket**:
   Ensure this repository is pushed to your git provider.

2. **Import Project to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard) -> **Add New** -> **Project**.
   - Select your repository.

3. **Configure Environment Variables**:
   In the Vercel project settings during import (or later in Settings > Environment Variables), add the following:
   ```
   AIRTABLE_API_KEY=your_airtable_api_key
   AIRTABLE_BASE_ID=your_base_id
   AIRTABLE_TABLE_NAME=RSVPs
   ```

4. **Deploy**:
   Click **Deploy**. Vercel will automatically detect Next.js and build the application.
   
   - **Framework Preset**: Next.js
   - **Build Command**: `next build` (default)
   - **Output Directory**: `.next` (default)

The application will be live instantly with server-side features (Server Actions) fully functional.

## Project Structure

- `/app`: App Router pages and layout
- `/components`: UI components (Hero, Speakers, Agenda, etc.)
- `/components/ui`: Reusable Shadcn UI primitives
- `/lib`: Utilities and helpers
- `globals.css`: Base styles and Tailwind directives
- `tailwind.config.ts`: Design system configuration (colors, fonts)
