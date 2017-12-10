import React from 'react';
import {
  HistoryList,
} from './component';
import '../../style/index.css';
import { UpdateSetState } from '../../constant';
import { HISTORY_LIST } from './config';

class Search extends React.Component {
  constructor(props) {
    super(props);
    // 页面 mount 的状态
    this.unmount = false;
    this.state = {
      // 历史记录显示开关
      histortyVisible: false,
      // 历史记录列表
      historyData: HISTORY_LIST,
    };

    // 点击 item
    this.clickItem = this.clickItem.bind(this);
    // 设置 state
    this.SafeSetState = this.SafeSetState.bind(this);
  }

  componentWillMount() {
    this.SafeSetState({
      histortyVisible: true,
    })
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  // 设置 state
  SafeSetState(stateObj, callback) {
    UpdateSetState({
      stateObj,
      content: this,
      callback
    });
  }

  // 点击历史记录
  clickItem(item) {
    alert(item.key)
  }

  render () {
    const {
      histortyVisible,
      historyData,
    } = this.state;
    return (
      <HistoryList
        visible={histortyVisible}
        list={historyData}
        handleClick={this.clickItem}
      />
    )
  }
}

export default Search;
