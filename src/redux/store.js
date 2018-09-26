import { createStore, compose } from 'redux'

import rootReducer from './rootReducer'

const defaultState = {
  menu: {
    isOpen: false,
  },
}

const enhancers = compose(
  typeof window !== 'undefined' ? window.devToolsExtension ? window.devToolsExtension() : f => f : f => f
)

const store = createStore(
  rootReducer,
  defaultState,
  enhancers
);

export default store
