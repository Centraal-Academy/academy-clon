import { ADD_PROGRAMS } from './types'

export function addPrograms (programs) {
  return {
    type: ADD_PROGRAMS,
    payload: programs
  }
}
