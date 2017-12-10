import React from 'react';
import PropTypes from 'prop-types';
import { NOOP } from '../../../../constant';

function SuggestList(props) {
  return (
    <ul style={{ display: props.visible ? 'block' : 'none' }}>
      {
        props.list.map((item, key) => (
          <li key={item.key} onClick={() => { props.onClick(item.key) }}>
            {item.text}
          </li>
        ))
      }
    </ul>
  )
}


SuggestList.propTypes = {
  // 是否显示
  visible: PropTypes.bool,
  // 数据列表
  list: PropTypes.array,
  // 点击
  onClick: PropTypes.func,
}

SuggestList.defaultProps = {
  list: [{
    key: '',
    text: '',
  }],
  onClick: NOOP,
}

export default SuggestList;
