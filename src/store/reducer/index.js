import programsReducer from './programsReducer'

export default function rootReducer (state = {}, action) {
  return {
    ...state,
    programs: programsReducer(state.programs, action)
  }
}
