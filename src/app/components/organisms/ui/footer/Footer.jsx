import styles from './Footer.module.css'
const date = new Date().getFullYear()

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span>© {date}. All rights reserved.</span>
      </div>
    </footer>
  )
}
