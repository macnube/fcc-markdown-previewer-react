import React, { Component } from 'react'
import PropTypes from 'prop-types'
import marked from 'marked'

class Previewer extends Component {

  componentDidMount () {
    document.getElementById('preview')
    .innerHTML = marked(this.props.text)
  }

  componentDidUpdate () {
    document.getElementById('preview')
    .innerHTML = marked(this.props.text)
  }

  render() {
    return (
      <div id='preview' className='preview-container'>
      </div>
    )
  }
}

Previewer.propTypes = {
  text: PropTypes.string.isRequired
}

export default Previewer