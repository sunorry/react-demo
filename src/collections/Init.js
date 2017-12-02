import React, { Component } from 'react'
import { observer } from 'mobx-react'

import store from '../store/search'

import History from '../components/History'
import Suggest from '../components/Suggest'
import NoSuggess from '../components/NoSuggest'

@observer
export default class Init extends Component {

  render () {
    return (
      <div style={{display: store.showType === 'INIT' ? 'block' : 'none'}}>
        <History />
        <Suggest />
        <NoSuggess />
      </div>
    )
  }

}
