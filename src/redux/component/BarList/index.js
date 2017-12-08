import React, { Component } from 'react'

export default class List extends Component {
  render () {
    return (
      <ul>
        {this.props.list.map(item => (
            <li key={item.key}
                onClick={() => { this.props.onTap(item) }}
                className={this.props.current === item.key ? 'current' : ''}
            >{item.text}</li>
        ))}
      </ul>
    );
  }
}
