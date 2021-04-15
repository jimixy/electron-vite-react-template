import '../index.twstyled.css'
import './assets/css/index.twstyled.css'

import ReactDOM from 'react-dom'
import React, { StrictMode } from 'react'
import App from './router/index'
// import App from './test'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
