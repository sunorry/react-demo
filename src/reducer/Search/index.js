import { combineReducers } from 'redux'

// 搜索框的值
const UPDATE_SEARCH_VAL = 'UPDATE_SEARCH_VAL';
// 搜索类型
const UPDATE_SHOW_TYPE = 'UPDATE_SHOW_TYPE';

function searchVal(state = '', action) {
  switch (action.type) {
    case UPDATE_SEARCH_VAL:
      return action.payload;
    default:
      return state
  }
}

function showType(state = 'HISTORY', action) {
  switch (action.type) {
    case UPDATE_SHOW_TYPE:
      return action.payload
    default:
      return state
  }
}

const search = combineReducers({
  searchVal,
  showType,
})

export default search
