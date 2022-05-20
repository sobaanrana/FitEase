import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'font-awesome/css/font-awesome.min.css'
import { Provider } from 'react-redux'
import { store } from './app/store'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
