import React from 'react';
import {
  HistoryList,
} from './component';
import { Body } from '../../component';
import { HISTORY_LIST } from './config';
import { SetSafeState } from '../../decorate';
import '../../style/index.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    // 页面 mount 的状态
    this.unmounted = false;
    this.state = {
      // 历史记录显示开关
      histortyVisible: false,
      // 历史记录列表
      historyData: HISTORY_LIST,
    };

    // 页面初始化
    this.init = this.init.bind(this);
    // 点击 item
    this.clickItem = this.clickItem.bind(this);
    // 设置 state
    this.SetSafeState = this.SetSafeState.bind(this);
  }

  componentWillMount() {
    this.init();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  @SetSafeState()
  SetSafeState(config, callback) {
    this.setState(config, callback)
  }

  init() {
    this.SetSafeState({
      histortyVisible: true,
    })
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
      <div>
        <Body>
          <HistoryList
            visible={histortyVisible}
            list={historyData}
            handleClick={this.clickItem}
          />
        </Body>
      </div>
    )
  }
}

export default Search;
