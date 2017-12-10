import React from 'react'

export default class Counter extends React.Component {
  render () {
    return (
      <div>
        <p>
          {this.props.number}
        </p>
        <button onClick={() => this.props.onAdd(1)}>
          Add
        </button>
        <button onClick={() => this.props.onMinus(1)}>
          Minus
        </button>
      </div>
    )
  }
}
