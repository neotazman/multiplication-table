import React from 'react'

export default function Boxes(props) {
    const { startingValue, howManyBoxes } = props;
    let successArray = []
    for (let i = 0; i <= howManyBoxes; i++) {
        let product = startingValue * i
        successArray.push(product)
    }

    return (
        <div className="numberProducts">
            <tr>
            {
                successArray.map((product) => {
                    return <td className="numberCell"> {product} </td>
                })
            }
            </tr>
        </div>
    )
}
