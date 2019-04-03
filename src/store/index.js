import { createStore, compose } from 'redux'
import rootReducer from './reducer'

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })) || compose

const store = createStore(
  rootReducer,
  composeEnhancers()
)

export default store
