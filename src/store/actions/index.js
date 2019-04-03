import { ADD_PROGRAMS, AUTHENTICATE_USER } from './types'

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
