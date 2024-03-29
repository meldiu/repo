import propTypes from 'prop-types'
import styles from './SideBar.module.css'
import { useState } from 'react'
export const SideBar = ({
  categories,
  isOpen,
  handleCategory,
  handleShowSideBar,
}) => {
  const [categoryActive, setCategoryActive] = useState('All')
  const getCategory = category => {
    setCategoryActive(category)
    handleCategory(category)
  }
  return (
    <aside className={`${styles.container} ${isOpen ? styles.active : ''}`}>
      <div className={styles.blob} />
      <nav className={`${styles.nav}`}>
        <ul className={styles.list}>
          {categories.map(category => (
            <li key={category} className={styles.item}>
              <button
                type="button"
                className={`${styles.button} ${
                  category === categoryActive ? styles.active : ''
                }`}
                onClick={() => {
                  getCategory(category)
                  handleShowSideBar()
                }}
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
  isOpen: propTypes.bool,
  handleCategory: propTypes.func,
  handleShowSideBar: propTypes.func,
}
