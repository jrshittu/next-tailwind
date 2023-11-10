import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/public/components/Nav';
import Footer from '@/public/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Love Story',
  description: 'Built with Next and Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
