import "./globals.css"

export const metadata = {
  title: "Welcome",
  description: "Created with next",
  icons: {
    icon: './favicon.ico',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body >{children}</body>
    </html>
  )
}
