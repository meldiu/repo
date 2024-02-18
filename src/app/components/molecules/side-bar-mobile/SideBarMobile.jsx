import propTypes from 'prop-types'
import styles from './SideBarMobile.module.css'
import { CATEGORIES } from '../../../utils/const'

export const SideBarMobile = ({ isOpen }) => {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.active : ''}`}>
      <nav className={`${styles.nav}`}>
        <ul className={`${styles.list}`}>
          {CATEGORIES.map(category => (
            <li key={category} className={styles.item}>
              <a href="#">Home</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

SideBarMobile.propTypes = {
  isOpen: propTypes.bool,
}
