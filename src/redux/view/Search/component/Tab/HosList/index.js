import React from 'react'
import PropTypes from 'prop-types'

const NOOP = () => {}

function SuggestList (props) {
  if (props.list.length === 0) return null;
  return (
    <ul>
      {
        props.list.map(item  => (
          <li key={item.key} onClick={() => { props.handleClick(item) }}>
            {item.text}
          </li>
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
  list: [],
  handleClick: NOOP
}

export default SuggestList
