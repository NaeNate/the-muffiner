import "@styles/globals.css"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}

export default Layout
