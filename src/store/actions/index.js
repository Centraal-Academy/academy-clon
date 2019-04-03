import { ADD_PROGRAMS, AUTHENTICATE_USER, SET_SELECTED_PROGRAM } from './types'

export function addPrograms (programs) {
  return {
    type: ADD_PROGRAMS,
    payload: programs
  }
}

export function authenticateUser (auth) {
  return {
    type: AUTHENTICATE_USER,
    payload: auth
  }
}

export function setSelectedProgram (program) {
  return {
    type: SET_SELECTED_PROGRAM,
    payload: program
  }
}
