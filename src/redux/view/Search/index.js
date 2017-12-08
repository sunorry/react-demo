import React from 'react';
import { Input, HistoryList } from '../../component';
import './style.css'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.list= [ {
      key: 'aaa',
      text: 'aaaa'
    }, {
      key: 'bbb',
      text: 'aaaa'
    }];

    this.onHistoryItem = this.onHistoryItem.bind(this);
  }

  // 点击历史记录
  onHistoryItem(key) {
    alert(key)
  }

  render () {
    return (
      <div>
        <Input style={'input-box'}  />
        <HistoryList
          visible
          onClick={this.onHistoryItem}
          list={this.list}
        />
      </div>
    )
  }
}

export default Search;
