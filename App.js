// Your code here
import { 
    useEffect,
    useState,
} from "react"
import Boxes from Boxes.js

const [input, setInput] = useState(0)

useEffect(() => {

}, [input])

function App() {

    return(
        <div>
            <input />
            <Boxes startingValue={2} howManyBoxes={11} />
        </div>
    )
    
}
