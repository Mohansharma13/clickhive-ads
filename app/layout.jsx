// app/layout.jsx
import './globals.css'
import Footer from '../components/UI/Footer';
import Headder from '../components/UI/Headder';
import Whatsapp from '../components/UI/whatsapp.jsx';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon2.png" />
        <link rel="apple-touch-icon" href="/icon2.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        {/* ClickHive Meta Data */}
        <title>ClickHive - Boost Your Brand Performance</title>
        <meta name="description" content="ClickHive helps brands grow on Amazon, Flipkart, and beyond with tailored digital marketing, SEO, and ad management services." />
        <meta name="keywords" content="ClickHive, digital marketing, Amazon ads, Flipkart SEO, brand growth, ecommerce performance, Meta ads, Google ads" />
        <meta name="author" content="ClickHive Team" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="ClickHive - Boost Your Brand Performance" />
        <meta property="og:description" content="Elevate your ecommerce brand with ClickHive's full-stack digital marketing services." />
        <meta property="og:image" content="/clickhive-og-image.png" />
        <meta property="og:url" content="https://clickhive.in" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ClickHive - Boost Your Brand Performance" />
        <meta name="twitter:description" content="ClickHive helps brands scale with expert advertising, SEO, and platform support." />
        <meta name="twitter:image" content="/clickhive-og-image.png" />
      </head>
      <body>
        <Headder />
        {children}
        <Footer />
        <Whatsapp />
      </body>
    </html>
  )
}
