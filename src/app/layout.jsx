import propTypes from 'prop-types'
// import { Inter } from 'next/font/google'

import '../../node_modules/minireset.css/minireset.min.css'
import './globals.css'
import { Header } from './components/organisms/ui/header/Header'
import { Footer } from './components/organisms/ui/footer/Footer'

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
    'Compilation and organization of a wide variety of tools and resources for web developers and designers',
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
