import { COUNTER } from "../types/counter.type"

const initialState = {
  counterOn: false,
  CounterStart: 0,
};

export default function counter(state = initialState, action){
  switch(action.type)
  {
    case COUNTER.START_COUNTER:
      return {
        ...state,
        id: action.payload,
        counterOn: true,
        CounterStart: state.CounterStart + 1,
      }
    case COUNTER.STOP_COUNTER:
      return {
        ...state,
        counterOn: false,
        CounterStart: state.CounterStart
      }
      case COUNTER.RESET_COUNTER:
        return {
          ...state,
          counterOn: false,
          CounterStart: 0
        }
    default:
      return state
  }
}