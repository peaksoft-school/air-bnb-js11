import { useState } from 'react'
import './App.css'
import JoinUs from './components/signIn/JoinUs'

const App = () => {
   const [open, setOpen] = useState(false)

   const alihan = () => {
      setOpen((prev) => !prev)
   }
   return (
      <div>
         <button type="button" onClick={alihan}>
            ali
         </button>
         Air-BnB
         <JoinUs isOpenModal={open} onClose={alihan} />
      </div>
   )
}

export default App
