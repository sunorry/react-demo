import React, { Component } from 'react'

import store from '../store/search'
import { observer } from 'mobx-react'

@observer
class ListItem extends Component {
  constructor(props) {
    super(props)
    this.goToResult = this.goToResult.bind(this)
  }

  goToResult() {
    store.setSearchKey(this.props.text)
    store.setShowType('RESULT')
  }

  render () {
    return (
      <li onClick={this.goToResult}>
        {this.props.text}
      </li>
    )
  }
}

@observer
export default class Suggest extends Component {
  render () {
    const listItems = store.suggestList.map(text => <ListItem key={text + 'suggest'} text={text} />)
    return (
      <ul style={{ display: store.showHistory ? 'block' : 'none' }}>
        {listItems}
      </ul>
    )
  }
}
