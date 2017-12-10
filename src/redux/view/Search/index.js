import React from 'react';
import {
  Input,
  Empty,
  HistoryList,
  SuggestList,
} from '../../component';
import './style.css'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 搜索历史
      historyData:[{
        key: 'aaa',
        text: 'aaa'
      }, {
        key: 'bbb',
        text: 'bbb'
      }],
      // suggest
      suggestData:[{
        key: 'aaa',
        text: 'aaa'
      }, {
        key: 'bbb',
        text: 'bbb'
      }],
    };

    this.onItem = this.onItem.bind(this);
  }

  // 点击历史记录
  onItem(key) {
    alert(key)
  }

  render () {
    const {
      historyData = [],
      suggestData = [],
    } = this.state;
    return (
      <div>
        <Input style={'input-box'}  />
        <HistoryList
          visible
          onClick={this.onItem}
          list={historyData}
        />
        <SuggestList
          visible
          onClick={this.onItem}
          list={suggestData}
        />
      </div>
    )
  }
}

export default Search;
