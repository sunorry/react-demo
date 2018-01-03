import React from 'react'
import PropTypes from 'prop-types'
import { NOOP } from '../../../../constant'
import TabBar from './TabBar';
import RecommendList from './RecommendList';
import HosList from './HosList';
import DeptsList from './DeptsList';

function Tab (props) {
  console.log(props)
  return (
    <div style={{ display: props.visible ? 'inline-block' : 'none' }}>
      <TabBar
        current={props.current}
        tabBarList={props.tabBarList}
        handleClick={props.handleClick}
      />
      {
        props.current === 'recommend' &&
        <RecommendList list={props.searchList} />
      }
      {
        props.current === 'hos' &&
        <HosList list={props.searchList} />
      }
      {
        props.current === 'depts' &&
        <DeptsList list={props.searchList} />
      }
    </div>
  )
}

Tab.propTypes = {
  // 是否显示
  visible: PropTypes.bool,
  // 当前选中的key
  current: PropTypes.string,
  // 数据列表
  tabBarList: PropTypes.array,
  // 结果数据
  searchList: PropTypes.array,
  // 点击
  handleClick: PropTypes.func,
}

Tab.defaultProps = {
  visible: true,
  current: '',
  tabList: [{
    key: '',
    text: ''
  }],
  searchList: [],
  handleClick: NOOP,
}

export default Tab
