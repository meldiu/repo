import propTypes from 'prop-types'
import styles from './Cards.module.css'
import { Card } from '../../../molecules/card/Card'

export const Cards = ({ resources }) => {
  return (
    <div className={styles.cards}>
      {resources.map(
        ({ id, title, description, category, logo, url }, index) => (
          <div key={id} className={styles['card-wrapper']}>
            <Card
              index={index}
              title={title}
              description={description}
              category={category}
              logo={logo}
              url={url}
            />
          </div>
        )
      )}
    </div>
  )
}

Cards.propTypes = {
  resources: propTypes.array,
}
