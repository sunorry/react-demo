import React from 'react'
import { connect } from 'react-redux'
import { add, minus } from '../testStore/actions'
import Counter from './Counter'

class App extends React.Component {
  render () {
    const {dispatch} = this.props
    return (
      <Counter number={this.props.number}
               onAdd={num => {dispatch(add(num)) }}
               onMinus={num => {dispatch(minus(num)) }} />
    )
  }
}

function select (state) {
  return {
    number: state
  }
}

export default connect(select)(App)
