import React from 'react'

export default function Boxes(props) { //the component that displays the individual Boxes
    const { startingValue, howManyBoxes } = props;
    let successArray = [] //a place to put the values for the table
    for (let i = 0; i <= howManyBoxes; i++) {
        let product = startingValue * i
        successArray.push(product)
    }

    return (
        <div className="numberProducts">
            <tr>
            { //maps an element for each value
                successArray.map((product) => {
                    return <td className="numberCell"> {product} </td>
                })
            }
            </tr>
        </div>
    )
}
