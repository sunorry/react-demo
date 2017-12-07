import React, { Component } from 'react'
import { observer } from 'mobx-react'

import HistoryList from '../components/HistoryList'

@observer
export default class History extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
    this.onTap = this.onTap.bind(this)
  }

  onTap(key) {
    const { store } = this.props
    store.setShowType('RESULT')
    this.props.onSetInputValue(key)
    store.fetchResultBar()
    store.resetList()
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        list: ['头痛门诊', 'DO MORE', 'Casey Neistat']
      })
    }, 300)
  }

  render () {
    const { store } = this.props
    return (
      <HistoryList list={this.state.list}
        show={!store.searchKey.length}
        onTap={this.onTap}
      />
    )
  }
}
