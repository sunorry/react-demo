import React from 'react'
import PropTypes from 'prop-types'
import { NOOP } from '../../../../constant'
import Empty from './Empty';

function SuggestList (props) {
  const { list = [], handleClick } = props;
  if (list.length === 0) return (<Empty />)
  return (
    <ul>
      {
        list.map(item => (
          <li key={item.key} onClick={() => { handleClick(item) }}>{item.text}</li>
        ))
      }
    </ul>
  )
}

SuggestList.propTypes = {
  // 数据列表
  list: PropTypes.array,
  // 点击
  handleClick: PropTypes.func
}

SuggestList.defaultProps = {
  list: [{
    key: '',
    text: ''
  }],
  handleClick: NOOP
}

export default SuggestList
