import "@styles/globals.css"
import styles from "@styles/Layout.module.css"
import Link from "next/link"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head />

      <body>
        <header>
          <div className={styles.topBar}></div>
          <Link href="/">
            <h1 className={styles.header}>The Muffiner</h1>
          </Link>
          <h2 className={styles.by}>By The Jounalism Club at ICS</h2>
          <div className={styles.bottomBar}></div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  )
}

export default Layout
