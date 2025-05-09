// app/layout.jsx
import './globals.css'
import Footer from '../components/UI/Footer'
import Headder from '../components/UI/Headder'

export const metadata = {
  title: {
    default: 'ClickHive',
    template: '%s | ClickHive'
  },
  description: 'ClickHive helps businesses optimize their Amazon ads with intelligent automation and real-time analytics.',
  keywords: ['Amazon Ads', 'ClickHive', 'Ad Automation', 'Digital Marketing', 'PPC', 'eCommerce Growth'],
  authors: [{ name: 'Mohan Sharma', url: 'https://clickhive.digital' }],
  creator: 'ClickHive Team',
  metadataBase: new URL('https://clickhive.digital'),
  openGraph: {
    title: 'ClickHive - Smart Ad Solutions',
    description: 'Optimize your Amazon ads effortlessly with ClickHive. More conversions, less spend.',
    url: 'https://clickhive.digital',
    siteName: 'ClickHive',
    images: [
      {
        url: '/assets/icon-clickhive.png',  // Add your image URL for Open Graph
        width: 1200,
        height: 630,
        alt: 'ClickHive Banner'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClickHive - Smart Ad Solutions',
    description: 'Smartly automate and scale your Amazon ads with ClickHive.',
    site: '@clickhive',
    creator: '@clickhive',
    images: ['/assets/icon-clickhive.png'],  // Add your image URL for Twitter card
  },
  icons: {
    icon: '/favicon.ico',  // Logo for the favicon
    apple: '/apple-touch-icon.png',  // Apple touch icon
  },
  alternates: {
    canonical: '/assets/icon-clickhive.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon2.png" />
        <link rel="apple-touch-icon" href="/icon2.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        {/* You can also link to the logo image for social sharing */}
      </head>
      <body>
        <Headder />
        {children}
        <Footer />
      </body>
    </html>
  )
}
