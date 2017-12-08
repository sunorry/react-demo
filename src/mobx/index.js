import React from 'react'
import ReactDOM from 'react-dom'
import { useStrict } from 'mobx'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import SmartInput from './collections/SmartInput'
import History from './collections/History'
import Suggest from './collections/Suggest'
import NoSuggess from './collections/NoSuggest'

import ResultBar from './collections/ResultBar'
import Recommand from './collections/Recommand'
import Hospital from './collections/Hospital'
import Depts from './collections/Depts'

import './index.css'

import store from './store/search'

useStrict(true)

@observer
class App extends React.Component {
  constructor(props) {
    super(props)
    this.searchKeyChange = this.searchKeyChange.bind(this)
    this.searchFocus = this.searchFocus.bind(this)
    this.setSmartInputValue = this.setSmartInputValue.bind(this)
  }

  throttleFetchSuggest(value) {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
    if (!value) return
    this.timer = setTimeout(() => {
      store.fetchSuggest(value)
    }, 300)
  }

  searchKeyChange(value) {
    this.syncSearchKey(value)
    this.throttleFetchSuggest(value.trim())
  }

  searchFocus() {
    store.setShowType()
    store.fetchSuggest()
  }

  setSmartInputValue(value) {
    this.smartInput.setValue(value)
    this.syncSearchKey(value)
  }

  syncSearchKey(value) {
    store.syncSearchKey(value)
  }

  // TODO: 本应该 input 的事件都写在自己的容器组件中，但是点击历史和搜素建议的时候都需要修改 input 中的值
  render () {
    return (
      <div>
        <SmartInput
          ref={ bar => this.smartInput = bar }
          onInputValueChange={this.searchKeyChange}
          onInputFouce={this.searchFocus} />

        <div style={{ display: store.showType === 'INIT' ? 'block' : 'none' }}>
          <History store={store}
            onSetInputValue={ this.setSmartInputValue }/>
          <Suggest store={store}
            onSetInputValue={ this.setSmartInputValue }/>
          <NoSuggess store={store} />
        </div>
        <div style={{ display: store.showType === 'RESULT' ? 'block' : 'none' }}>
          <ResultBar store={store} />
          <Recommand store={store} />
          <Hospital store={store} />
          <Depts store={store} />
        </div>
        <DevTools />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
