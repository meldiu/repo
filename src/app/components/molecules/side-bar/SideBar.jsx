import propTypes from 'prop-types'
import { useState } from 'react'
import styles from './SideBar.module.css'
export const SideBar = ({ categories, handleCategory }) => {
  const [categoryActive, setCategoryActive] = useState('All')
  const getCategory = category => {
    setCategoryActive(category)
    handleCategory(category)
  }

  return (
    <aside className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {categories.map(category => (
            <li key={category} className={styles.item}>
              <button
                type="button"
                className={`${styles.button} ${
                  category === categoryActive ? styles.active : ''
                }`}
                onClick={() => getCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

SideBar.propTypes = {
  categories: propTypes.array,
  handleCategory: propTypes.func,
}
