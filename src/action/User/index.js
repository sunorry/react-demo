// action 类型
const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

/*
 * action 创建函数
 */
function updateUserInfo(text) {
  return {
    type: UPDATE_USER_INFO,
    payload: text,
  }
}


export default {
  updateUserInfo,
}
