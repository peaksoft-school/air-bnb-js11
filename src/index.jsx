// import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import Themes from './components/UI/Themes'
import Notification from './components/UI/Notification'
import LoadingSpinner from './components/UI/LoadingSpinner'
import { persistor, store } from './store/store'
import { injectStore } from './configs/axiosInstance'
import './index.css'

injectStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   // <StrictMode>
   <Provider store={store}>
      <PersistGate loading={<LoadingSpinner />} persistor={persistor}>
         <Themes>
            <Notification />

            <App />
         </Themes>
      </PersistGate>
   </Provider>
   // </StrictMode>
)
