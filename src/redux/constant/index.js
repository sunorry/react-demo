/**
 * 全局变量
 */

// 空函数
export const NOOP =  () => {};

/**
 * 安全的设置 state
 * @param {*} stateObj state
 * @param {*} content this
 * @param {*} unmount 状态标识
 * @param {*} callback 回到函数
 */
export const UpdateSetState = ({
  stateObj,
  content,
  callback,
  unmount = 'unmount',
}) => {
  if (!content[unmount]) {
    content['setState'](stateObj, callback);
  }
}
