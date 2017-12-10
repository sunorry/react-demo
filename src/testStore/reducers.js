import { ADD, MINUS } from './actions'

export default function add(state = 10, action) {
    switch (action.type) {
        case ADD:
            return state + (action.number || 1)
        case MINUS:
            return state - (action.number || 1)
        default:
            return state
    }
}

// function minus(state = 100, action) {
//     switch (action.type) {
//         case MINUS:
//             return state - (action.number || 1)
//         default:
//             return state
//     }
// }