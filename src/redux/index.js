import { combineReducers } from "redux";

// REDUCERS
import counterReducer from './reducers/counter'

const rootReducer = combineReducers({
  counter: counterReducer
})

export default rootReducer