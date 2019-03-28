import React from 'react'
import PropTypes from 'prop-types'
import './Cover.css'
function Cover ({ style, src, children, ...otherParams }) {
  const resultStyles = { ...style, backgroundImage: `url('${src}')` }
  return (
    <div className='Cover' style={resultStyles}>
      {children}
    </div>
  )
}

Cover.defaultProps = {
  style: {}
}

Cover.propTypes = {
  src: PropTypes.string.isRequired
}

export default Cover
