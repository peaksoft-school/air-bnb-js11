import './App.css'

// const App = () => {
//    return <div>Air-bnb</div>
// }

// export default App

import React from 'react'
import { showToast } from './utils/helpers'

const App = () => {
   const handleSuccessNotification = () => {
      showToast({
         heading: 'alihan,',
         message:
            'We either couldnt find anything matching your search or have encountered an error. If youre searching for a unique location, try searching again with more common keywords.',
         type: 'success',
      })
   }

   const handleErrorNotification = () => {
      showToast({
         heading: 'alihan,',
         message: 'Error notification!',
         type: 'error',
      })
   }

   return (
      <div>
         <button type="button" onClick={handleSuccessNotification}>
            Show Success Notification
         </button>
         <button type="button" onClick={handleErrorNotification}>
            Show Error Notification
         </button>
      </div>
   )
}

export default App
