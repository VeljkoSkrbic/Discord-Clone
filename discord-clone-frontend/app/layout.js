import { Inter } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <UserProvider>
    <html lang="en">
      <body className={inter.className}>

        {children}
        
      </body>
    </html>
    </UserProvider>
  )
}
