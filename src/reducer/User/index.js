import { combineReducers } from 'redux'

const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

function userInfo(state = {userId: 12, userName: 'slogeor'}, action) {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return action.payload;
    default:
      return state
  }
}

export default  combineReducers({
  userInfo,
})
