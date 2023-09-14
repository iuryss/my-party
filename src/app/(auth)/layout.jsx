import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MyParty',
  description: 'The best partys!!!!',
}

export default function RootLayout({ children }) {
  return ( 
  <ClerkProvider>
    <html>
        <body className={`${inter.className}`}>
            {children}
        </body>
    </html>
  </ClerkProvider>
  )
}
