import Image from 'next/image'
import styles from './About.module.css'

export const metadata = {
  title: 'About us',
}

export default function About() {
  return (
    <div className={styles.container}>
      <Image
        src="/illustrations/flat-illustration-about-page.svg"
        alt=""
        width={1200}
        height={800}
        className={styles.image}
      />
      <p className={styles.paragraph}>
        We are a couple passionate about design and web development. We love
        creating websites that are attractive, functional, and accessible. We
        also enjoy sharing our knowledge and resources with the community.
      </p>
      <p className={styles.paragraph}>
        {`That's why we created this page, which serves as a repository of useful
        websites for designers and web developers. Here you can find links to
        resources and much more.`}
      </p>
      <p className={styles.paragraph}>
        Our goal is to make your work easier. We hope you find what you are
        looking for and enjoy our page. If you have any suggestions, comments,
        or questions, feel free to{' '}
        <a
          className={styles.link}
          href="mailto:meldiu.me@gmail.com?Subject=Hello%20there!"
        >
          contact us.
        </a>{' '}
        We will be happy to hear from you.
      </p>
    </div>
  )
}
