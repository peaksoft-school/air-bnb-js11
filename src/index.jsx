import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Themes from './components/UI/theme/Themes'
import 'react-toastify/dist/ReactToastify.css'
import App from './App'
import Notification from './components/UI/Notification'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <React.StrictMode>
      <Themes>
         <App />
         <Notification />
      </Themes>
   </React.StrictMode>
)
