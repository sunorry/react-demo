import React, { Component } from 'react'

import store from '../store/search'
import { observer } from 'mobx-react'

class ListItem extends Component {
  render () {
    return (
      <li>
        {this.props.text}
      </li>
    )
  }
}

export default @observer class Suggest extends Component {
  render () {
    const listItems = store.suggestList.map(text => <ListItem key={text + 'suggest'} text={text} />)
    return (
      <ul style={{ display: store.showHistory ? 'block' : 'none' }}>
        {listItems}
      </ul>
    )
  }
}
