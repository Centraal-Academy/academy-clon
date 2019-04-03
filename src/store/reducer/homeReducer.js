import programsReducer from './programsReducer'

export default function homeReducer (state = {}, action) {
  return {
    ...state,
    programs: programsReducer(state.programs, action)
  }
}
