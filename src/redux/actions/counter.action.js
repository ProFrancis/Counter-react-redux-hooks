import { COUNTER } from "../types/counter.type"

const actionStart = () => { return { type: COUNTER.START_COUNTER }}
const actionStop = () => { return { type: COUNTER.STOP_COUNTER }}

export const startCounter = () => async dispatch => {
  try{
    dispatch(actionStart())
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