import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../store/search'

class ListItem extends Component {
  constructor(props) {
    super(props)
    this.showResult = this.showResult.bind(this)
  }

  showResult(key) {
    store.setShowType('RESULT')
    store.setSearchKey(key)
  }
  render () {
    return (
      <li onClick={() =>{ this.showResult(this.props.text) }}>
        {this.props.text}
      </li>
    )
  }
}

@observer
export default class History extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }
  render () {
    const listItmes = this.state.list.map(text => <ListItem key={text + 'history'} text={text} />)
    return (
      <div style={{ display: !store.searchKey.length ? 'block' : 'none' }} >
        <ul>
          {listItmes}
        </ul>
      </div>
    )
  }
  componentDidMount () {
    const data = ['头痛门诊', 'DO MORE', 'Casey Neistat']
    setTimeout(() => {
      this.setState({
        list: data
      })
    }, 300)
  }
}
