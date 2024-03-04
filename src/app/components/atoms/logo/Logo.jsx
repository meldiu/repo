import Image from 'next/image'
import propTypes from 'prop-types'
export const Logo = ({ isLazy, src, title }) => {
  return (
    <Image
      src={src}
      alt={`${title} logo`}
      loading={isLazy ? 'lazy' : 'eager'}
      priority={!isLazy}
      quality={100}
      width={40}
      height={40}
    />
  )
}
Logo.propTypes = {
  isLazy: propTypes.bool,
  src: propTypes.string,
  title: propTypes.string,
}
