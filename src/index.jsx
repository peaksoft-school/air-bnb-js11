import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import Themes from './components/UI/Themes'
import Notification from './components/UI/Notification'
import App from './App'
import { store } from './store/store'
import { injectStore } from './configs/axiosInstance'

injectStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <StrictMode>
      <Provider store={store}>
         <Themes>
            <Notification />
            <App />
         </Themes>
      </Provider>
   </StrictMode>
)
