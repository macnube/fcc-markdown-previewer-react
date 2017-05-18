import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Input extends Component {
  render () {
    return (
      <div className='input-container'>
        <textarea
          onInput={this.props.onChange}
          onChange={this.props.onChange}
          rows='30'
          cols='70'
          placeholder='Insert markdown text here'
          value={this.props.value}/>
      </div>
    )
  }
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

Input.defaultProps = {
  value: ''
}

export default Input