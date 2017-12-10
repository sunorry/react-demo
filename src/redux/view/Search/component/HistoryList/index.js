/**
 * 搜索历史列表组件
 */
import React from 'react'
import PropTypes from 'prop-types';
import { NOOP } from '../../../../constant';
import Item from './Item';

function HistoryList(props) {
  return (
    <ul style={{ display: props.visible ? 'block' : 'none' }}>
      {
        props.list.map((item, key) => (
          <Item data={item} onClick={props.onClick} key={key}/>
        ))
      }
    </ul>
  );
}

HistoryList.propTypes = {
  // 是否显示
  visible: PropTypes.bool,
  // 列表数据
  list: PropTypes.array,
  // 处理点击事件
  handleClick: PropTypes.func,
}

HistoryList.defaultProps = {
  visible: false,
  list: [],
  handleClick: NOOP,
}
export default HistoryList;
