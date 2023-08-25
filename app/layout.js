import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header/header'
import Footer  from './components/Footer/Footer'
import '../app/components/libCss/style.css';
import '../app/components/libCss/utils.css';
import '../app/components/libCss/modern-normalize.css';
import MobileNav from './components/MobileNav/MobileNav'
import mNav from '../app/components/JsContent/MNav';
{/* <link rel="icon" 
href="/logo.png" 
type="image"

/> */}
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Oscar Deb',
  description: 'WEB DESIGNER AND WEB APP DEVELOPER',
  // icon: "https://drive.google.com/file/d/19sfyDfPg7XzqdMNCYukS9lDfLe6Pgy0x/view?usp=drive_link",

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body >
      <Header /> 
      <MobileNav />
      {/* mNav(); */}
        {children}
        <Footer />
        </body>
   </html>
  )
}
