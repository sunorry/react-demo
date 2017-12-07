import React, { Component } from 'react'
import { observer } from 'mobx-react'

import SuggestList from '../components/SuggestList'

@observer
export default class Suggest extends Component {
  constructor(props) {
    super(props)
    this.goResult = this.goResult.bind(this)
  }
  goResult(text) {
    this.props.onSetInputValue(text)
    const { store } = this.props
    store.setShowType('RESULT')
    store.fetchResultBar()
    store.resetList()
  }
  render () {
    const { store } = this.props
    return (
      <SuggestList list={store.suggestList}
        show={store.showHistory}
        onTap={this.goResult}
      />
    );
  }
}
