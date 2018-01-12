import React from 'react';
import { Input, HistoryList, SuggestList, Tab } from './component';
import { Body } from '../../component';
import {
  BAR_List,
  HOS_LIST,
  DETPS_List,
  HISTORY_LIST,
  SUGGEST_LIST,
  getRecommendList,
} from './config';
import { SetSafeState } from '../../decorate';
import '../../style/index.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    // 页面 mount 的状态
    this.unmounted = false;
    // 推荐数据
    this.recommendList = [];
    // 医院数据
    this.hosList = [];
    // 科室数据
    this.deptsList = [];
    // 推荐标识
    this.recommendFetched = false;
    // 科室标识
    this.deptsFetched = false;
    // 医院标识
    this.hosFetched = false;
    this.state = {
      // 搜索值
      // searchVal: '',
      // 显示类型: 'HISTORY: 历史记录, SUGGEST: 搜索建议, SEARCH: 搜索结果
      // showType: 'HISTORY',
      // 历史记录列表
      historyData: HISTORY_LIST,
      // 搜素建议列表
      suggestListData: [],
      // 选中的 tabBar key
      resultCurrent: '',
      // tabBarList
      tabBarList: [],
    };

    // 页面初始化
    this.init = this.init.bind(this);
    // 点击 item
    this.clickHistoryItem = this.clickHistoryItem.bind(this);
    // 设置 state
    this.SetSafeState = this.SetSafeState.bind(this);
    // input 输出
    this.onChange = this.onChange.bind(this)
    // 点击搜索建议
    this.clickSuggestItem = this.clickSuggestItem.bind(this)
    // 点击 result bar
    this.fetchResultList = this.fetchResultList.bind(this)
    // 设置input 值
    this.setInputValue = this.setInputValue.bind(this)
    // 点击 input
    this.onInputClick = this.onInputClick.bind(this)
    // 根据关键字搜索
    this.fetchSearchResult = this.fetchSearchResult.bind(this);
  }

  componentWillMount() {
    this.init();
  }

  componentWillUnmount() {
    this.unmounted = true;
    this.unsubscribe && this.unsubscribe();
  }

  @SetSafeState()
  SetSafeState(config, callback) {
    this.setState(config, callback)
  }

  init() {
  }

  // 设置 Input 的 value
  setInputValue(value) {
    // this.setState({
    //   searchVal: value,
    // })
    this.props.setSearchVal(value);
  }

  // 点击历史记录
  clickHistoryItem(item) {
    console.log('click history item', item)
    this.fetchSearchResult(item);
  }

  // 点击搜索建议
  clickSuggestItem(item) {
    console.log('click suggest item', item)
    this.fetchSearchResult(item)
  }

  // 获取搜索结果
  fetchSearchResult(item) {
    // step1: 更新 Input 的 value
    this.setInputValue(item.text)
    // step2: 拉取TabBar数据
    this._fetchTabBarResult()
  }

  // 先获取 TabBar 数据
  _fetchTabBarResult() {
    setTimeout(() => {
      this.SetSafeState({
        tabBarList: BAR_List
      }, this.fetchResultList(BAR_List[0]))
    }, 300)
  }

  // 这里其实做了两件事情，写 demo 无伤大雅
  // 1 设置选中 item
  // 2 fetch list
  fetchResultList({key}) {
    const type = key;
    // 已经 fetch 的直接显示
    if (this[type + 'Fetched']) {
      this.props.setShowType('SEARCH');
      this.SetSafeState({
        // showType: 'SEARCH',
        resultCurrent: key,
        searchList: this[type + 'List']
      });
      console.log(type, 'cache')
      return;
    }

    switch (key) {
      // 医院
      case 'hos':
        this.hosList = HOS_LIST;
        break;
      // 科室
      case 'depts':
        this.deptsList = DETPS_List;
        break;
      default:
        // 推荐
        this.recommendList = getRecommendList();
    }

    setTimeout(() => {
      this.props.setShowType('SEARCH');
      this[type + 'Fetched'] = true;
      this.SetSafeState({
        // showType: 'SEARCH',
        searchList: this[type + 'List'],
        resultCurrent: key
      })
      console.log(type, 'fetched')
    }, 300)
  }

  // 搜索 input 框变化
  onChange(value) {
    console.log('input change', value)
    this.setInputValue(value);
    this.throttleFetchSuggest(value)
  }

  // fetch suggest list
  throttleFetchSuggest(key) {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
    // 空显示历史数据
    if (!key) {
      this.props.setShowType('HISTORY');
      this.SetSafeState({
        // showType: 'HISTORY',
      })
      return
    }

    this.timer = setTimeout(() => {
      const data = Math.random() > 0.1 ? SUGGEST_LIST : [];
      this.props.setShowType('SUGGEST');
      this.SetSafeState({
        // showType: 'SUGGEST',
        suggestListData: data,
      })
    }, 100)
  }

  // 当在 result 显示的情况下，点击输入框，应该显示 suggest
  // 如果点击的搜索词正好是上次点击的，直接显示（也可以重新请求）
  // 还是应该分成两块 INIT RESULT 控制起来比较简单，这个 bug 就先不解决了。·
  onInputClick() {
    if(!this.state.resultCurrent) return
    const hasSuggest = this.state.suggestListData.length > 0
    if (hasSuggest) {
      this.props.setShowType('SUGGEST');
      // this.SetSafeState({
      //   showType: 'SUGGEST',
      // });
    }
  }

  render () {
    const {
      // 历史数据
      historyData,
      // suggest 数据
      suggestListData,
      // tabbar
      tabBarList,
      // 存在的 tabbar
      resultCurrent,
      // 搜索关键字
      // searchVal,
      // 数据列表
      searchList,
      // 显示类型
      // showType,
    } = this.state;

    const { searchVal, showType } = this.props;
    console.log('state:', this.state)
    console.log('props:', this.props)
    console.log('===================')
    return (
      <div>
        <Body>
          <Input
            value={searchVal}
            onChange={this.onChange}
            handleClick={this.onInputClick}
          />
          {
            showType === 'HISTORY' &&
            <HistoryList list={historyData}  handleClick={this.clickHistoryItem} />
          }
          {
            showType === 'SUGGEST' &&
            <SuggestList list={suggestListData} handleClick={this.clickSuggestItem} />
          }
          {
            showType === 'SEARCH' &&
            <Tab
              current={resultCurrent}
              tabBarList={tabBarList}
              handleClick={this.fetchResultList}
              searchList={searchList}
            />
          }
        </Body>
      </div>
    )
  }
}

export default Search;
