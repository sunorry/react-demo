/**
 * 搜索历史记录组件
 */
import React from 'react'
import PropTypes from 'prop-types';
import { NOOP } from '../../../../constant';
import { ClickMe } from '../../../../component';

function HistoryList(props) {
  const { list = [], title, handleClick } = props;
  if (list.length === 0) return null;
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {
          list.map((item, index) => (
            <li key={item.key}>
              <ClickMe handleClick={handleClick} param={item}>
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
  // 列表数据
  list: PropTypes.array,
  // 处理点击事件
  handleClick: PropTypes.func,
}

HistoryList.defaultProps = {
  title: '历史搜索',
  list: [],
  handleClick: NOOP,
}

export default HistoryList;
