import styles from './Header.module.css'
import { SearchBar } from '../../../molecules/search-bar/SearchBar'
export const Header = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <a className={styles.logo} href="/">
          <h1 className={styles.title}>repo</h1>
        </a>
        <SearchBar />
      </nav>
    </header>
  )
}
