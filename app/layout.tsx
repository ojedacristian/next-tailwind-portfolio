import './globals.css'
import { Work_Sans } from 'next/font/google'

const workSans = Work_Sans({
  weight: ['300', '500'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Portfolio Open Source - Cristian Ojeda',
  description: 'Developer Portfolio designed by Srinivas Dezign and Developed by Cristian Ojeda'
}

export default function RootLayout ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={`bg-gradient-to-tl from-black to-blackgr ${workSans.className}`}>
        <main
          className="xl:container 2xl:px-40 mx-auto px-8 text-neutral-1">
          {children}
        </main>
      </body>
    </html>
  )
}
