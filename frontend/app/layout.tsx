import './globals.css'

export const metadata = {
  title: 'Sendly — Email marketing, beautifully organized',
  description: 'A focused command center for thoughtful email marketing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
