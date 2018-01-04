// action 类型
// 搜索框的值
const UPDATE_SEARCH_VAL = 'UPDATE_SEARCH_VAL';
// 搜索类型
const UPDATE_SHOW_TYPE = 'UPDATE_SHOW_TYPE';

/*
 * action 创建函数
 */
function setSearchVal(text) {
  return {
    type: UPDATE_SEARCH_VAL,
    payload: text,
  }
}

function setShowType(index) {
  return {
    type: UPDATE_SHOW_TYPE,
    payload: index,
  }
}

export default {
  setSearchVal,
  setShowType,
}
