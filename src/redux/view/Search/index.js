import React from 'react';
import {
  Input,
  HistoryList,
  SuggestList,
  Empty,
  Tab,
  // HosList,
  // RecommendList,
  // DeptsList,
} from './component';
import { Body } from '../../component';
import {
  HISTORY_LIST,
  SUGGEST_LIST,
  BAR_List,
  HOS_LIST,
  DETPS_List,
  getRecommendList,
} from './config';
import { SetSafeState } from '../../decorate';
import '../../style/index.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    // 页面 mount 的状态
    this.unmounted = false;
    // 推荐
    this.resultRecommendList = [];
    // 医院
    this.resultHosList = [];
    // 科室
    this.resultDeptsList = [];

    // 推荐
    this.resultRecommendFetched =  false;
    // 科室
    this.resultDeptsFetched = false;
    // 医院
    this.resultHosFetched = false;

    this.state = {
      // 搜索值
      searchVal: '',
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
      TabVisible: false,
      // tabBarList
      tabBarList: [],
      // resultCurrent: ''
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

  // 点击历史，搜索建议同步搜索框内容
  setInputValue(value) {
    this.SetSafeState({
      searchVal: value,
    });
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
    if(this.current === key) return;


    let listKey = '';
    switch (key) {
      case 'hos':
        listKey = 'resultHos'
        this.resultHosList = HOS_LIST;
        break;
      case 'depts':
        listKey = 'resultDepts'
        this.resultDeptsList = DETPS_List;
        break;
      default:
        listKey = 'resultRecommend'
        this.resultRecommendList = getRecommendList();
    }

    // 已经 fetch 的直接显示
    if (this[listKey + 'Fetched']) {
      this.SetSafeState({
        resultCurrent: key,
        searchList: this[listKey + 'List']
      });
      return;
    }

    setTimeout(() => {
      this[listKey + 'Fetched'] = true;
      this.SetSafeState({
        searchList: this[listKey + 'List'],
        resultCurrent: key
      })
      console.log(listKey, 'fetched')
    }, 300)
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

  // 当在 result 显示的情况下，点击输入框，应该显示 suggest
  // 如果点击的搜索词正好是上次点击的，直接显示（也可以重新请求）
  // 还是应该分成两块 INIT RESULT 控制起来比较简单，这个 bug 就先不解决了。·
  onInputClick() {
    if(!this.state.resultCurrent) return
    const hasSuggest = this.state.suggestListData.length > 0
    this.SetSafeState({
      suggestListVisible: hasSuggest,
      suggestNoDataVisible: !hasSuggest,
      resultBarVisible: false
    })
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
      resultCurrent,
      searchVal,
      searchList,
    } = this.state;
    console.log(searchList)
    return (
      <div>
        <Body>
          <Input
            value={searchVal}
            onChange={this.onChange}
            handleClick={this.onInputClick}
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
          <Tab
            current={resultCurrent}
            visible={resultBarVisible}
            tabBarList={resultBarList}
            handleClick={this.fetchResultList}
            searchList={searchList}
          />
        </Body>
      </div>
    )
  }
}

export default Search;
