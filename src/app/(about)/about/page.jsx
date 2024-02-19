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
        Somos una pareja de apasionados por el diseño y el desarrollo web. Nos
        encanta crear sitios web que sean atractivos, funcionales y accesibles.
        También nos gusta compartir nuestros conocimientos y recursos con la
        comunidad.
      </p>
      <p className={styles.paragraph}>
        Por eso creamos esta página, que funciona como un repositorio de sitios
        web de utilidad para diseñadores y desarrolladores web. Aquí podrás
        encontrar enlaces a recursos y mucho más.
      </p>
      <p className={styles.paragraph}>
        Nuestro objetivo es facilitar tu trabajo. Esperamos que encuentres lo
        que buscas y que disfrutes de nuestra página. Si tienes alguna
        sugerencia, comentario o pregunta, no dudes en contactarnos. Estaremos
        encantados de escucharte.
      </p>
    </div>
  )
}
