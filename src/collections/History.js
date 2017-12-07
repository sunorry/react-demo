import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../store/search'

import HistoryList from '../components/HistoryList'

@observer
export default class History extends Component {
  constructor (props) {
    super(props)
    this.onTap = this.onTap.bind(this)
  }

  onTap(key) {
    const { store } = this.props
    store.setShowType('RESULT')
    // store.syncSearchKey(key)
    this.props.onSetInputValue(key)
    store.fetchResultBar()
    store.resetList()
  }

  componentDidMount() {
    store.fetchHistory()
  }

  render () {
    const { store } = this.props
    return (
      <HistoryList list={store.historyList}
        show={!store.searchKey.length}
        onTap={this.onTap}
      />
    )
  }
}
