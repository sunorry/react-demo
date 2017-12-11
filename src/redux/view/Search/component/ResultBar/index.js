import React from 'react'
import PropTypes from 'prop-types'
import { NOOP } from '../../../../constant'
import './style.css'

function ResultBar (props) {
  return (
    <ul className='bar-container' style={{ display: props.visible ? '' : 'none' }}>
      {
        props.list.map(item => (
          <li
            className={props.current === item.key ? 'current bar-item' : 'bar-item'}
            key={item.key}
            onClick={() => { props.handleClick(item) }}
          >
            {item.text}
          </li>
        ))
      }
    </ul>
  )
}

ResultBar.propTypes = {
  // 是否显示
  visible: PropTypes.bool,
  // 数据列表
  list: PropTypes.array,
  // 点击
  handleClick: PropTypes.func
}

ResultBar.defaultProps = {
  visible: false,
  list: [{
    key: '',
    text: ''
  }],
  handleClick: NOOP
}

export default ResultBar
