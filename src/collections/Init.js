import React, { Component } from 'react'

import History from '../components/History'
import Suggest from '../components/Suggest'
import NoSuggess from '../components/NoSuggest'

export default class Init extends Component {

  render () {
    return (
      <div style={{ display: 'block' }}>
        <History />
        <Suggest />
        <NoSuggess />
      </div>
    )
  }

}
