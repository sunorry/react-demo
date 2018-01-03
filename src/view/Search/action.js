// action 类型
// 搜索框的值
export const UPDATE_SEARCH_VAL = 'UPDATE_SEARCH_VAL';
// 搜索类型
export const UPDATE_SHOW_TYPE = 'UPDATE_SHOW_TYPE';

/*
 * action 创建函数
 */
export function setSearchVal(text) {
  return {
    type: UPDATE_SEARCH_VAL,
    payload: text,
  }
}

export function setShowType(index) {
  return {
    type: UPDATE_SHOW_TYPE,
    payload: index,
  }
}
