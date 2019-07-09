import {
  TASK_ONDRAGEND,
  INCREMENT,
  LOGIN,
  LOGOUT,
  MODAL_CLOSE,
  MODAL_OPEN
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

export function login() {
  return {
    type: LOGIN,
  }
}

export function logout() {
  return {
    type: LOGOUT,
  }
}

export function handleModalOpen () {
  return {
    type: MODAL_OPEN,
  }
}

export function handleModalClose () {
  return {
    type: MODAL_CLOSE,
  }
}