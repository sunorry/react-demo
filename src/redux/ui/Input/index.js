/**
 * 文本输入框组件
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const NOOP = () => {};

class Input extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // 文本框的内容
      value: props.value,
    };
    // 页面 mount 的状态
    this.unmount = false;
    // input 的 ref
    this.inputEl = null;
    this.safeSetState = this.safeSetState.bind(this);
    // 处理点击
    this.handleClick = this.handleClick.bind(this);
    // 处理文本变化
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillUnmount() {
    this.unmount = true;
  }

  // 页面销毁，不能 setState
  safeSetState(config, callback) {
    if (!this.unmount) {
      this.setState(config, callback);
    }
  }

  handleClick () {
    this.inputEl.focus()
    this.props.onClick(this.state.value)
  }

  handleChange (e) {
    let value = e.target.value
    this.safeSetState({
      value,
    });
    this.props.onChange(value)
  }

  render () {
    return (
      <input
        className={'g-placeholder'}
        type={this.props.type}
        placeholder={this.props.placeholder}
        value={this.state.value}
        ref={text => this.inputEl = text}
        onClick={this.handleClick}
        onChange={this.handleChange} />
    )
  }
}

Input.propTypes = {
  // 默认占位
  placeholder: PropTypes.string,
  // 默认值
  value: PropTypes.string,
  // 点击事件
  onClick: PropTypes.func,
  // 文本改变事件
  onChange: PropTypes.func,
  // input type
  type: PropTypes.oneOf(['text']),
};

Input.defaultProps = {
  style: null,
  placeholder: '请输入关键字',
  value: '',
  placeholderStyle: null,
  onClick: NOOP,
  onChange: NOOP,
  type: 'text',
};

export default Input;
