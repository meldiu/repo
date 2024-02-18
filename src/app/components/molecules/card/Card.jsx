import propTypes from 'prop-types'
import styles from './Card.module.css'

import { Logo } from '../../atoms/Logo/Logo'
import { Title } from '../../atoms/Title/Title'
import { Description } from '../../atoms/Description/Description'
import { Tag } from '../../atoms/Tag/Tag'
import { ExternalLink } from '../../atoms/Icons/ExternalLink/ExternalLink'

export const Card = ({ title, description, category, logo, url }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <Logo src={logo} title={title} />
          <Title>{title}</Title>
        </div>
        <a
          aria-label={title}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <ExternalLink />
        </a>
      </div>
      <div className={styles.body}>
        <Description>{description}</Description>
      </div>
      <div className={styles.footer}>
        <div className={styles.categories}>
          {category.map((category, index) => (
            <Tag key={index}>{category}</Tag>
          ))}
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  category: propTypes.array,
  logo: propTypes.string,
  url: propTypes.string,
}
