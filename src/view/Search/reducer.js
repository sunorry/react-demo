import { combineReducers } from 'redux'
import { UPDATE_SEARCH_VAL, UPDATE_SHOW_TYPE } from './action'

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
