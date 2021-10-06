import { 
  useEffect,
  useState,
} from "react"
import Boxes from "./Boxes"
import './App.css';

function App() {
  const [input, setInput] = useState(0)

  const handleInputChange = (event) => {
    event.preventDefault()
    setInput(event.target.value)
  }

  return(
    <div>
      <input type='number' placeholder='type starting number here' value={input} onChange={handleInputChange}/>
      <Boxes startingValue={input} howManyBoxes={11} />
    </div>
  )
}

export default App;
