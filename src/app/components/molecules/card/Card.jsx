import propTypes from 'prop-types'
import styles from './Card.module.css'

import { Logo } from '@/components/atoms/logo/Logo'
import { Title } from '@/components/atoms/title/Title'
import { Description } from '@/components/atoms/description/Description'
import { Tag } from '@/components/atoms/tag/Tag'
import { ExternalLink } from '@/components/atoms/icons/external-link/ExternalLink'

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
