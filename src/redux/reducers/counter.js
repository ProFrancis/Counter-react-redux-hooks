import { COUNTER } from "../types/counter.type"

const initialState = {
  counterOn: false,
  CounterStart: 0,
  CounterTime: 0
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
        CounterTime: state.CounterTime
      }
    case COUNTER.STOP_COUNTER:
      return {
        ...state,
        counterOn: false,
        CounterStart: state.CounterStart
      }
    default:
      return state
  }
}