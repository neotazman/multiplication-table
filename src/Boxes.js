import React from 'react'

export default function Boxes(props) { //the component that displays the individual Boxes
    const { startingValue, howManyBoxes } = props;
    let successArray = [startingValue] //a place to put the values for the table
    for (let i = 0; i <= howManyBoxes; i++) {
        let product = startingValue * i
        successArray.push(product)
    }

    return (
        <tr>
            { //maps an element for each value
                successArray.map((product, index) => {
                    return <td className="numberCell" className={index} > {product} </td>
                })
            }
        </tr>
    )
}
