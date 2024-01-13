import './App.css'
import Select from './components/UI/Select'

const App = () => {
   const option = [
      { name: 'ali', id: 1, value: 12 },
      { name: 'adi', id: 2, value: 15 },
      { name: 'ako', id: 3, value: 14 },
   ]
   return (
      <div>
         Air-bnb
         <Select label="filter by:" options={option} />
      </div>
   )
}

export default App
