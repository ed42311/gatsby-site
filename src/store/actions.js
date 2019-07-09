import {
  TASK_ONDRAGEND,
  INCREMENT,
} from "./actionTypes";
  
export function taskOnDragEnd(payload) {
  return {
    type: TASK_ONDRAGEND,
    payload
  }
}

export function increment() {
  return {
    type: INCREMENT,
  }
}