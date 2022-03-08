import { COUNTER } from "../types/counter.type"

export default function counter(state = 0, action){
  switch(action.type)
  {
    case COUNTER.START_COUNTER:
      return state + 1
    case COUNTER.STOP_COUNTER:
      // 
    default:
      return state
  }
}