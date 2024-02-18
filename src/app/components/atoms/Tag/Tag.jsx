import propTypes from 'prop-types'
export const Tag = ({ children }) => {
  return (
    <span
      style={{
        color: 'var(--c-cadetblue)',
        backgroundColor: 'var(--c-darkblue)',
        fontSize: 'var(--f-s-sm)',
        fontWeight: 'var(--f-regular)',
        fontStyle: 'italic',

        height: '24px',

        padding: '0.75rem',
        display: 'grid',
        placeContent: 'center',
        textWrap: 'nowrap',

        borderRadius: 'var(--br-sm)',
      }}
    >
      {children}
    </span>
  )
}

Tag.propTypes = {
  children: propTypes.string,
}
