import propTypes from 'prop-types'
export const Title = ({ children }) => {
  return (
    <p
      style={{
        fontSize: 'var(--f-s-base)',
        fontWeight: 'var(--f-bold)',
        fontFamily: 'var(--f-title)',
      }}
    >
      {children}
    </p>
  )
}
Title.propTypes = {
  children: propTypes.string,
}
