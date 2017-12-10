/**
 * 页面正文组件
 */

import React from 'react';
import PropTypes from 'prop-types';
import { OfflineView, Loading } from '../../component';

function Body(props) {
  return (
    <div>
      {/* 断网 */}
      {
        !props.isOnline && <OfflineView reTry={props.reTry} />
      }

      {/* 接口挂了 */}
      {props.isOnline && !props.isApiNotError &&
        <OfflineView reTry={props.reTry}  tips="网络请求失败，请稍后重试" />
      }

      {/* 数据还没有ok */}
      {
        props.isOnline && props.showLoading &&
        <Loading />
      }

      {/* 子元素 */}
      {
        props.isOnline && props.isApiNotError && !props.showLoading && props.children
      }
    </div>
  );
}

Body.propTypes = {
  // 网络情况 true: 有网, false: 断网
  isOnline: PropTypes.bool,
  // 页面接口是否不是挂了 true: 没有挂, false: 挂了
  isApiNotError: PropTypes.bool,
  // 断网重试
  reTry: PropTypes.func,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 是否显示 Loading
  showLoading: PropTypes.bool,
};

Body.defaultProps = {
  isOnline: true,
  isApiNotError: true,
  reTry: () => {},
  children: null,
  style: null,
  showLoading: false,
};

export default Body;
