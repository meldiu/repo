import propTypes from 'prop-types'
// import { Inter } from 'next/font/google'

import '../../node_modules/minireset.css/minireset.min.css'
import './globals.css'
import { Header } from '@/components/organisms/ui/header/Header'
import { Footer } from '@/components/organisms/ui/footer/Footer'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | Repo',
    default: 'Repo',
  },
  authors: [
    { name: 'Melissa', url: 'https://www.behance.net/melicolors' },
    { name: 'Eduardo', url: 'https://github.com/MrRedu' },
  ],
  creator: 'Meldiu',
  description:
    'Compilation and organization of a wide variety of tools and resources for web developers and designers.',
  keywords: [
    'Repository',
    'Development',
    'Front-End',
    'Design',
    'UI',
    'UX',
    'UI/UX',
    'Web',
  ],
  openGraph: {
    title:
      'Repo',
    description:
      'Compilation and organization of a wide variety of tools and resources for web developers and designers.',
    url: 'https://repo-meldiu.vercel.app/',
    siteName: 'Repo',
    images: [
      {
        url: 'https://i.ibb.co/g37bq8f/og-repo.webp',
        width: 800,
        height: 600,
        alt: 'Compilation of web development and design tools and resources.',
      },
      {
        url: 'https://i.ibb.co/g37bq8f/og-repo.webp',
        width: 1800,
        height: 1600,
        alt: 'Compilation of web development and design tools and resources.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      // className={inter.className}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: propTypes.node,
}
