import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'

import { Provider } from 'react-redux'
// @ts-expect-error: module has no declaration file
import { store } from './redux/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)