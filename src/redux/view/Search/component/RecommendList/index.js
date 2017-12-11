import React from 'react'
import PropTypes from 'prop-types'
import { NOOP } from '../../../../constant'

function RecommendList (props) {
  return (
    <ul style={{ display: props.visible ? 'block' : 'none' }}>
      {props.list.map(item  => (
                           <li key={item.key} onClick={() => { props.handleClick(item) }}>
                               {item.text}
                           </li>
                          ))}
    </ul>
  )
}

RecommendList.propTypes = {
  // 是否显示
  visible: PropTypes.bool,
  // 数据列表
  list: PropTypes.array,
  // 点击
  handleClick: PropTypes.func
}

RecommendList.defaultProps = {
  list: [{
    key: '',
    text: ''
  }],
  handleClick: NOOP
}

export default RecommendList
