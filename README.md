# Simplilearn Executive Roundtable - Landing Page

This project is a pixel-perfect reconstruction of the Simplilearn Executive Roundtable landing page, built with Next.js 15 and Tailwind CSS.

The goal was to create a high-performance, responsive landing page that strictly matches the provided Figma design while implementing a real backend integration for the RSVP form.

## 🔗 Quick Links

- **Live Demo:** [https://simple-learn-tm2x.vercel.app/](https://simple-learn-tm2x.vercel.app/)
- **Airtable Database:** [View Database](https://airtable.com/appyRKyeBnihO6BMx/shrMzyUH785GCFkqu)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Backend:** Airtable (integrated via Server Actions)
- **Language:** TypeScript

## Key Features

- **Pixel-Perfect Design:** Closely follows the original Figma mockup across desktop and mobile breakpoints.
- **Server-Side Forms:** The RSVP form uses Next.js Server Actions for secure, Javascript-free (progressive enhancement) submission directly to Airtable.
- **Performance:** Optimized images using `next/image` and zero client-side API waterfalls.
- **Type Safety:** Written in strict TypeScript to ensure reliability.

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

## Implementation Notes

- **Architecture:** I opted for Server Components by default to keep the client bundle small.
- **Forms:** The RSVP form uses Server Actions exclusively—no API routes were needed.
- **Styling:** Used standard Tailwind utility classes; no custom CSS files (except for global directives).
- **Clean Code:** Kept dependencies minimal and structure flat.

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
