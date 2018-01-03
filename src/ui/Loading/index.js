/**
 * Loading 组件
 */
import React from 'react';
import PropTypes from 'prop-types';

function Loading(props) {
  return (
    <div>{props.tips}</div>
  );
}

Loading.propTypes = {
  tips: PropTypes.string,
};

Loading.defaultProps = {
  tips: '加载ing',
};

export default Loading;
