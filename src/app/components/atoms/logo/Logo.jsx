import propTypes from 'prop-types'
export const Logo = ({ src, title }) => {
  return (
    <img
      style={{
        width: '40px',
        height: '40px',
      }}
      src={src}
      alt={`${title} logo`}
    />
  )
}
Logo.propTypes = {
  src: propTypes.string,
  title: propTypes.string,
}
