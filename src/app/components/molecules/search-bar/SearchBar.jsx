import styles from './SearchBar.module.css'
export const SearchBar = () => {
  return (
    <form action="" className={styles.container}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search by name or category"
      />
      <button
        type="button"
        aria-label="Search by name or category"
        className={styles.button}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.6133 18.6667H20.6667L27.32 25.3333L25.3333 27.32L18.6667 20.6667V19.6133L18.3067 19.24C16.7867 20.5467 14.8133 21.3333 12.6667 21.3333C7.88 21.3333 4 17.4533 4 12.6667C4 7.88 7.88 4 12.6667 4C17.4533 4 21.3333 7.88 21.3333 12.6667C21.3333 14.8133 20.5467 16.7867 19.24 18.3067L19.6133 18.6667ZM6.66667 12.6667C6.66667 15.9867 9.34667 18.6667 12.6667 18.6667C15.9867 18.6667 18.6667 15.9867 18.6667 12.6667C18.6667 9.34667 15.9867 6.66667 12.6667 6.66667C9.34667 6.66667 6.66667 9.34667 6.66667 12.6667Z"
            fill="#A7A9BE"
          />
        </svg>
      </button>
    </form>
  )
}
