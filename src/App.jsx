import './App.css'
import Select from './components/UI/Select'

const App = () => {
   const option = [
      { id: 1, value: 12 },
      { id: 2, value: 15 },
      { id: 3, value: 14 },
   ]
   return (
      <div>
         Air-bnb
         <Select
            label="filter by:"
            options={option}
            isValueAsId={false}
            defaultId="2"
         />
      </div>
   )
}

export default App
