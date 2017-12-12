import React from 'react'
// import PropTypes from 'prop-types'

export default function enhanceClick (WrappedComponent) {
  return class extends React.Component {
    constructor (props) {
      super(props)
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick (data) {
      this.props.handleClick && this.props.handleClick(this.props)
    }

    render () {
      return <WrappedComponent
                handleClick={this.handleClick}
                {...this.props}
             />
    }
  }
}