import React, { Component } from 'react'
import { observer } from 'mobx-react'

import store from '../store/search'

export default @observer class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.focusTextInput = this.focusTextInput.bind(this)
    this.changeSearchKey = this.changeSearchKey.bind(this)
  }

  focusTextInput () {
    this.inputEl.focus()
    store.setShowType()
    // TODO: 这里直接请求一次有点粗暴，多次点击有问题
    store.fetchSuggest()
    // this.props.store.fetchLength(3)
  }

  throttleFetchSuggest(value) {
    if(this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
    if(!value) return
    this.timer = setTimeout(() => {
      store.fetchSuggest(value)
    }, 300)
  }

  changeSearchKey (e) {
    const value = e.target.value.trim()
    store.syncSearchKey(value)
    this.throttleFetchSuggest(value)
  }

  render () {
    return (
      <div>
        <input
          type='text'
          value={store.searchKey}
          ref={text => this.inputEl = text}
          onClick={this.focusTextInput}
          onInput={this.changeSearchKey} />
      </div>
    )
  }
}
