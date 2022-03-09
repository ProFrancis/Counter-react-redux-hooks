import { COUNTER } from "../types/counter.type"

const actionStart = (payload) => { return { type: COUNTER.START_COUNTER, payload }}
const actionStop = () => { return { type: COUNTER.STOP_COUNTER }}

export const startCounter = (timerId) => async dispatch => {
  try{
    dispatch(actionStart(timerId))
  }catch(error){
    //
  }
}

export const stopCounter = () => async dispatch => {
  try{
    dispatch(actionStop())
  }catch(error){
    //
  }
}

export const actionsCounter = {
  startCounter,
  stopCounter
}