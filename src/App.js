import { 
  useState,
} from "react"
import Rows from './Rows'
import './index.css';

function App() {
  const [boxInput, setBoxInput] = useState(11) //the column input
  const [rowInput, setRowInput] = useState(11) //the row input

  //had to make the onChange functions seperately because the other way ran into bugs
  const handleBoxChange = (event) => {
    event.preventDefault()
    setBoxInput(event.target.value)
  }
  const handleRowChange = (event) => {
    event.preventDefault()
    setRowInput(event.target.value)
  }

  return(
    <div>
      <input type='number' placeholder='type column number' value={boxInput} onChange={handleBoxChange}/>
      <input type='number' placeholder='type row number' value={rowInput} onChange={handleRowChange}/>
      <Rows startingValue={0} howManyRows={rowInput} howManyBoxes={boxInput} />
    </div>
  )
}

export default App;
