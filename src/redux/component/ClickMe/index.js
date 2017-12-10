/**
 * ClickMe 组件
 * 解决子组件通过箭头函数传递参数，响应 onClick 事件
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClickMe extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // 点击事件
  handleClick() {
    this.props.handleClick(this.props.param);
  }

  render() {
    return (
      <div onClick={this.handleClick} className={'g-click'}>
        {this.props.children}
      </div>
    );
  }
}

ClickMe.propTypes = {
  // 子节点
  children: PropTypes.element,
  // 点击事件
  handleClick: PropTypes.func,
  // param 对象
  param: PropTypes.object,
};

ClickMe.defaultProps = {
  children: null,
  handleClick: () => {},
  param: {},
};

export default ClickMe;
