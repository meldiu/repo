import propTypes from 'prop-types'
export const Description = ({ children }) => {
  return (
    <p
      style={{
        fontSize: 'var(--f-s-sm)',
        color: 'var(--c-cadetblue)',
      }}
    >
      {children}
    </p>
  )
}
Description.propTypes = {
  children: propTypes.string,
}
