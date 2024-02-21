import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store/store'
import { injectStore } from './configs/axiosInstance'
import Themes from './components/UI/Themes'
import Notification from './components/UI/Notification'
import App from './App'
import './index.css'

injectStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <StrictMode>
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <Themes>
               <Notification />
               <App />
            </Themes>
         </PersistGate>
      </Provider>
   </StrictMode>
)
