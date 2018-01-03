import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const NOOP = () => {}

function TabBar (props) {
  return (
    <ul className='bar-container'>
      {
        props.tabBarList.map(item => (
          <li
            className={[props.current === item.key ? 'current bar-item' : 'bar-item']}
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

TabBar.propTypes = {
  // 数据列表
  tabBarList: PropTypes.array,
  // 点击
  handleClick: PropTypes.func
}

TabBar.defaultProps = {
  tabBarList: [{
    key: '',
    text: ''
  }],
  handleClick: NOOP
}

export default TabBar
