import { 
  useState,
} from "react"
import Rows from './Rows'
import './index.css';

function App() {
  const [input, setInput] = useState(null)

  const handleInputChange = (event) => {
    event.preventDefault()
    setInput(event.target.value)
  }

  return(
    <div>
      <input type='number' placeholder='type table size number' value={input} onChange={handleInputChange}/>
      <Rows startingValue={0} howManyRows={input} />
    </div>
  )
}

export default App;
