import React, { Component } from 'react'
import { observer } from 'mobx-react'

import store from '../store/search'
import SuggestList from '../components/SuggestList'

@observer
export default class Suggest extends Component {
  constructor(props) {
    super(props)
    this.goResult = this.goResult.bind(this)
  }
  goResult(text) {
    store.syncSearchKey(text)
    store.setShowType('RESULT')
    store.fetchResultBar()
    store.resetList()
  }
  render () {
    return (
      <SuggestList list={store.suggestList}
        show={store.showHistory}
        onTap={this.goResult}
      />
    );
  }
}
