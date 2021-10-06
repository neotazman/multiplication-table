import React from 'react'
import Boxes from './Boxes'

export default function Rows(props) {
    const{ startingValue, howManyRows } = props
    let inputArray = []
    for(let i = startingValue; i <= howManyRows; i++) {
        inputArray.push(i)
    }
    return (
        <div>
            <table>
                {
                    inputArray.map((num) => {
                        return <Boxes startingValue={num} howManyBoxes={howManyRows} />
                    })
                }
                
            </table>
        </div>
    )
}
