import React, { Component } from 'react'

export default class List extends Component {
  render () {
    return (
      <ul style={{ display: this.props.show ? 'block' : 'none' }}>
        {this.props.list.map(item => (
            <li key={item.code} onClick={() => { this.props.goDetail(item) }}>{item.text}</li>
        ))}
      </ul>
    );
  }
}
