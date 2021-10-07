import React from 'react'
import Boxes from './Boxes'

export default function Rows(props) { //had to make separate components to render the rows and columns
    const{ startingValue, howManyRows, howManyBoxes } = props //prop drilling sucks, but it's easier to create
    let inputArray = []
    for(let i = startingValue; i <= howManyRows; i++) {
        inputArray.push(i)
    }
    return (
        <div>
            <table>
                <tr>
                    <td>X</td>
                    {
                        inputArray.map((num) => {
                            return <td>{num}</td>
                        })
                    }
                </tr>
                { //the mapping is why i'm using react
                    inputArray.map((num) => {
                        return <Boxes startingValue={num} howManyBoxes={howManyBoxes} />
                    })
                }
                
            </table>
        </div>
    )
}
