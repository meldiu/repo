import Link from 'next/link'
import styles from './Footer.module.css'
const date = new Date().getFullYear()

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <span className={styles.title}>repo</span>
            <span className={styles.description}>
              Compilation and organization of a wide variety of tools and
              resources for web developers and designers.
            </span>
          </div>
          <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/about">About us</Link>
          </div>
        </div>
      </div>
      <hr
        style={{
          margin: '2rem 0 1rem 0',
          border: 'var(--b-main)',
          borderWidth: '1px 0 0',
        }}
      />
      <div>
        <div className={styles.copyright}>
          <span>© {date}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
