import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aaron | Portfolio',
  description: 'Aaron is a computer science developer this website was built to showcase my projects and experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}bg-gray-50 text-gray-950`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem]"></div>
        <div></div>
        {children}
        </body>
    </html>
  )
}