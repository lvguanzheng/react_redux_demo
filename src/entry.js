import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import 'babel-polyfill'

import reducers from './reducers/Index'
import rootSaga from './sagas/Index'
import App from './containers/Index'

const middleware = createSagaMiddleware()
const initialState = {}
const store = createStore(
    reducers,
    initialState,
    applyMiddleware(middleware)
)
middleware.run(rootSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
