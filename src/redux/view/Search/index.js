import React from 'react';
import {
  Input,
  HistoryList,
  SuggestList,
  Empty,
  ResultBar,
  HosList,
  RecommendList,
  DeptsList
} from './component';
import { Body } from '../../component';
import { HISTORY_LIST, SUGGEST_LIST, BAR_List, HOS_LIST, DETPS_List, getRecommendList } from './config';
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
      // 搜索建议显示开关
      suggestListVisible: false,
      // 搜素建议列表
      suggestListData: [],
      // 无搜索结果
      suggestNoDataVisible: false,
      // 结果 item bar
      resultBarVisible: false,
      // 结果 item list
      resultBarList: [],
      // 推荐
      resultRecommendList: [],
      resultRecommendListFetched: false,
      // 医院
      resultHosList: [],
      resultHosListFetched: false,
      // 科室
      resultDeptsList: [],
      resultDeptsListFetched: false,
      // 当前选中的 bar item
      resultCurrent: ''
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
  clickHistoryItem(item) {
    console.log('click history item', item)
    this.setInputValue(item.text)
    this._setResultState()
    this._fetchResultBar()
  }
  // 搜索 input 框变化
  onChange(value) {
    console.log('input change', value)
    this.throttleFetchSuggest(value)
  }

  // 点击搜索建议
  clickSuggestItem(item) {
    console.log('click suggest item', item)
    this.setInputValue(item)
    // 将除了结果相关 view 设置成不可见
    this._fetchResultBar()
  }

  _fetchResultBar() {
    setTimeout(() => {
      this.SetSafeState({
        resultBarList: BAR_List
      })
      this._setResultState()
      // fetch 里表中的第一个数据
      setTimeout(() => {
        this.fetchResultList(BAR_List[0])
      })
    }, 300)
  }
  // 这里其实做了两件事情，写 demo 无伤大雅
  // 1 设置选中 item
  // 2 fetch list
  fetchResultList({key}) {
    if(this.current === key) return
    // this.SetSafeState({
    //   resultRecommendVisible: true,
    //   resultRecommendList: getCommendList(),
    //   resultHosVisible: false,
    //   resultDeptsList: false
    // })
    let listKey = ''
    let mockData = ''
    switch (key) {
      case 'hos':
        listKey = 'resultHosList'
        mockData = HOS_LIST
        break;
      case 'depts':
        listKey = 'resultDeptsList'
        mockData = DETPS_List
        break;
      default:
        listKey = 'resultRecommendList'
        mockData = getRecommendList()
    }
    // 已经 fetch 的直接显示
    if(this.state[listKey + 'Fetched']) {
      this.SetSafeState({
        resultCurrent: key
      })
    } else {
      setTimeout(() => {
        this.SetSafeState({
          [listKey]: mockData,
          [listKey + 'Fetched']: true,
          resultCurrent: key
        })
        console.log(listKey, 'fetched')
      }, 300)
    }
  }

  // fetch suggest list
  throttleFetchSuggest(key) {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
    if (!key) return
    this.timer = setTimeout(() => {
      setTimeout(() => {
        const data = Math.random() > 0.1 ? SUGGEST_LIST : []
        this.SetSafeState({
          histortyVisible: false,
          suggestListData: data,
          suggestListVisible: !!data.length,
          suggestNoDataVisible: !data.length
        })
      }, 90)
    }, 200)
  }

  // 点击历史，搜索建议同步搜索框内容
  setInputValue(value) {
    this.input.setValue(value)
  }

  _setResultState() {
    this.SetSafeState({
      histortyVisible: false,
      suggestListVisible: false,
      suggestNoDataVisible: false,
      resultBarVisible: true
    })
  }

  render () {
    const {
      histortyVisible,
      historyData,
      suggestListVisible,
      suggestListData,
      suggestNoDataVisible,
      resultBarVisible,
      resultBarList,
      resultRecommendList,
      resultHosList,
      resultDeptsList,
      resultCurrent
    } = this.state;
    return (
      <div>
        <Body>
          <Input
            ref={text => this.input = text}
            onChange={this.onChange}
          />
          <HistoryList
            visible={histortyVisible}
            list={historyData}
            handleClick={this.clickHistoryItem}
          />
          <SuggestList
            visible={suggestListVisible}
            list={suggestListData}
            handleClick={this.clickSuggestItem}
          />
          <Empty
            visible={suggestNoDataVisible}
          />
          <ResultBar
            current={resultCurrent}
            visible={resultBarVisible}
            list={resultBarList}
            handleClick={this.fetchResultList}
          />
          <RecommendList
            visible={resultCurrent === 'recommend'}
            list={resultRecommendList}
          />
          <HosList
            visible={resultCurrent === 'hos'}
            list={resultHosList}
          />
          <DeptsList
            visible={resultCurrent === 'depts'}
            list={resultDeptsList}
          />
        </Body>
      </div>
    )
  }
}

export default Search;
