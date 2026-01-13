import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Simplilearn - The Skills That Matter Next',
  description: 'Preparing Your Workforce & Leaders for the AI Era',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, "font-sans min-h-screen bg-white antialiased")}>
        {children}
      </body>
    </html>
  )
}
