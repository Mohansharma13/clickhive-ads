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
