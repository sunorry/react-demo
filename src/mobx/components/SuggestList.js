import React, { Component } from 'react'

export default class List extends Component {
  render () {
    return (
      <ul style={{ display: this.props.show ? 'block' : 'none' }}>
        {this.props.list.map((text, index) => (
            <li key={index} onClick={() => { this.props.onTap(text) }}>{text}</li>
        ))}
      </ul>
    )
  }
}
