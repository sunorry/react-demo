/**
 * 断网组件
 */
import React from 'react';
import PropTypes from 'prop-types';

function OfflineView(props) {
  return (
    <div>
      <div>{props.tips}</div>
      <div onClick={props.reTry} className={'g-click'}>重试</div>
    </div>
  );
}

OfflineView.propTypes = {
  // 文案
  tips: PropTypes.string,
  // 重试回调
  reTry: PropTypes.func,
};

OfflineView.defaultProps = {
  tips: '网络不可用，请检查网络设置',
  reTry: () => {},
};

export default OfflineView;
