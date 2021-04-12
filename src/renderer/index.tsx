// import './assets/css/index.twstyled.css'
import '../index.twstyled.css'

import ReactDOM from 'react-dom'
import { StrictMode } from 'react'
// import App from './test'
import App from './router/index'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
