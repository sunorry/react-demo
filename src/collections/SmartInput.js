import React, { Component } from 'react'
// import { observer } from 'mobx-react'

// import store from '../store/search'

export default class SmartInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.focusInput = this.focusInput.bind(this)
    this.changeInputValue = this.changeInputValue.bind(this)
  }

  focusInput () {
    this.inputEl.focus()
  }

  changeInputValue(e) {
    let value = e.target.value
    this.setValue(value)
    this.props.onInputValueChange && this.props.onInputValueChange(value)
  }

  setValue(value) {
    this.setState({
      value
    })
  }

  render () {
    return (
      <div>
        <input
          type='text'
          value={this.state.value}
          ref={text => this.inputEl = text}
          onClick={this.focusInput}
          onChange={this.changeInputValue} />
      </div>
    )
  }
}
