# Simplilearn Executive Roundtable - Landing Page

A pixel-perfect, production-ready Next.js landing page for the Simplilearn Executive Roundtable event.

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Backend**: Airtable (via Server Actions)
- **Fonts**: Google Fonts (Geist, Outfit)
- **Image Optimization**: Next.js Image component
- **Icons**: Lucide React

## Features

- ✅ Fully responsive design (desktop & mobile)
- ✅ Server-side form handling with Airtable integration
- ✅ Zero client-side API calls
- ✅ Optimized images with proper sizing
- ✅ Production-ready code
- ✅ TypeScript strict mode
- ✅ Vercel-ready deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Airtable account with API key

### Local Development

1. **Clone the repository** and install dependencies:

```bash
npm install
```

2. **Set up environment variables**:

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

3. **Add your Airtable credentials** to `.env.local`:

```env
AIRTABLE_API_KEY=your_pat_token_here
AIRTABLE_BASE_ID=your_base_id_here
AIRTABLE_TABLE_NAME=RSVPs
```

**How to get Airtable credentials:**
- **API Key**: Create a Personal Access Token at https://airtable.com/create/tokens
- **Base ID**: Find it in the URL when viewing your base (e.g., `appXXXXXXXXXXXXXXXX`)
- **Table Name**: The name of the table where RSVPs will be stored

4. **Run the development server**:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the page.

## Project Structure

```
simplilearn/
├── app/
│   ├── actions.ts              # Server Action for RSVP form
│   ├── globals.css             # Tailwind imports
│   ├── layout.tsx              # Root layout with fonts
│   └── page.tsx                # Main landing page
├── components/
│   ├── Capabilities.tsx        # Skills/Capabilities section
│   ├── Hero.tsx                # Hero section with CTA
│   ├── RSVPForm.tsx            # Interactive RSVP form
│   └── Speakers.tsx            # Featured speakers section
├── public/
│   ├── logo-white.png
│   ├── hero-bg-v3.png
│   ├── speakers/               # Speaker photos
│   └── ...                     # Other assets
├── .env.example                # Environment template
├── .env.local                  # Local development (git-ignored)
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies
└── tsconfig.json               # TypeScript configuration
```

## Code Quality Standards

- **No API routes**: Forms use Server Actions exclusively
- **Server-first**: Components are Server Components by default
- **TypeScript strict**: Full type safety across codebase
- **Minimal dependencies**: Only essential packages
- **Clean code**: No over-engineering or abstractions

## Building for Production

```bash
npm run build
npm start
```

## Deployment on Vercel

### One-Click Deploy

1. Push your repository to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Add environment variables in the Vercel dashboard:
   - `AIRTABLE_API_KEY`
   - `AIRTABLE_BASE_ID`
   - `AIRTABLE_TABLE_NAME`
5. Deploy!

### Using Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts and add environment variables when asked.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `AIRTABLE_API_KEY` | Yes | Personal Access Token from Airtable |
| `AIRTABLE_BASE_ID` | Yes | Base ID from Airtable |
| `AIRTABLE_TABLE_NAME` | No | Table name (defaults to `RSVPs`) |

## Form Handling

The RSVP form is handled entirely on the server using Next.js Server Actions (`app/actions.ts`):

- Email validation happens server-side
- Direct integration with Airtable API
- No client-side API calls
- Secure credential handling
- Error handling and user feedback

## Performance Optimization

- Images optimized with Next.js Image component
- Proper `sizes` attributes for responsive images
- CSS-in-JS (Tailwind) only, no extra CSS files
- Static site generation (SSG) where possible
- Minimal JavaScript bundle

## Troubleshooting

### Form not submitting?
- Check that `AIRTABLE_API_KEY` and `AIRTABLE_BASE_ID` are set in `.env.local`
- Verify the Airtable API key has the necessary scopes
- Check browser console for error messages

### Images not loading?
- Ensure image files exist in the `public/` directory
- Check that image `sizes` attributes are properly defined
- Verify Next.js Image component `alt` text is present

### Build errors?
- Run `npm install` to ensure all dependencies are installed
- Delete `.next/` folder and rebuild: `npm run build`
- Check TypeScript errors: `npx tsc --noEmit`

## License

© 2009-2025 Simplilearn Solutions. All Rights Reserved.
