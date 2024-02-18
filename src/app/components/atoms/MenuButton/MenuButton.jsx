import propTypes from 'prop-types'
import styles from './MenuButton.module.css'
export const MenuButton = ({ isOpen, onClick }) => {
  return (
    <button onClick={onClick} className={`${styles.button}`}>
      <svg
        className={`${styles.ham} ${styles.ham6} ${
          isOpen ? styles.active : ''
        }`}
        viewBox="0 0 100 100"
        width="42"
        height="42"
      >
        <path
          className={`${styles.line} ${styles.top}`}
          d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
        />
        <path
          className={`${styles.line} ${styles.middle}`}
          d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
        />
        <path
          className={`${styles.line} ${styles.bottom}`}
          d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
        />
      </svg>
    </button>
  )
}
MenuButton.propTypes = {
  isOpen: propTypes.bool,
  onClick: propTypes.func,
}
