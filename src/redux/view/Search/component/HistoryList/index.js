/**
 * 搜索历史记录组件
 */
import React from 'react'
import PropTypes from 'prop-types';
import { NOOP } from '../../../../constant';
import { ClickMe } from '../../../../component';

function HistoryList(props) {
  return (
    <div className={props.visible ? 'g-show' : 'g-hide'}>
      <h4>{props.title}</h4>
      <ul>
        {
          props.list.map((item, index) => (
            <li key={item.key}>
              <ClickMe handleClick={props.handleClick} param={item}>
                <span>{item.text}</span>
              </ClickMe>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

HistoryList.propTypes = {
  // title
  title: PropTypes.string,
  // 是否显示
  visible: PropTypes.bool,
  // 列表数据
  list: PropTypes.array,
  // 处理点击事件
  handleClick: PropTypes.func,
}

HistoryList.defaultProps = {
  title: '历史搜索',
  visible: false,
  list: [],
  handleClick: NOOP,
}

export default HistoryList;
