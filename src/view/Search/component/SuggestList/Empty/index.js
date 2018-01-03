/**
 * 空组件
 */
import React from 'react'
import PropTypes from 'prop-types';

function Empty(props) {
  return (
    <div>{props.text}</div>
  );
}

Empty.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
}

Empty.defaultProps = {
  text: '暂无记录',
}

export default Empty;
