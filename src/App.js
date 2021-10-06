// Your code here
import { 
    useEffect,
    useState,
} from "react"
import Boxes from Boxes.js

export default function App() {
    const [input, setInput] = useState(0)

    const handleInputChange = (event) => {
        event.preventDefault()
        setInput(event.target)
    }

    return(
        <div>
            <input type='number' value={input} onChange={handleInputChange}/>
            <Boxes startingValue={2} howManyBoxes={11} />
        </div>
    )
    
}
