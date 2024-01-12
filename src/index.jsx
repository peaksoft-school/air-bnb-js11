import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Themes from './components/UI/theme/Themes'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <React.StrictMode>
      <Themes>
         <App />
      </Themes>
   </React.StrictMode>
)
