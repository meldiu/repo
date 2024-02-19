import Image from 'next/image'
import styles from './not-found.module.css'

export const metadata = {
  title: 'Not found',
}

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Image
        src="/illustrations/flat-illustration-notfound-page.svg"
        alt=""
        width={800}
        height={600}
        className={styles.image}
      />
      <p className={styles.paragraph}>
        {`We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.`}
      </p>
    </div>
  )
}
