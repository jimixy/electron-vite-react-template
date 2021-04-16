// import '../index.twstyled.css'
import './assets/css/index.twstyled.css'

import ReactDOM from 'react-dom'
import React, { StrictMode } from 'react'
import App from './router/index'

const path = require('path')
const electron = require('electron')

console.log(11, path, electron)

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
