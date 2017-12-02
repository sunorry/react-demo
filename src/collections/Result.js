import React, { Component } from 'react'
import { observer } from 'mobx-react'

import store from '../store/search'

@observer
export default class Result extends Component {
  render () {
    return (
      <div style={{ display: store.showType === 'RESULT' ? 'block' : 'none' }}>
        结果
      </div>
    )
  }
}
