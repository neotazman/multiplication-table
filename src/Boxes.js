import React from 'react'

export default function Boxes(props) {
    const { startingValue, howManyBoxes } = props;
    let successArray = []
    for (let i = 0; i < howManyBoxes; i++) {
        let product = startingValue * i
        successArray.push(product)
    }

    return (
        <div className="numberProducts">
            <ul>
            {
                successArray.map((product) => {
                    return <li className="numberCell" value={product}> {product} </li>
                })
            }
            </ul>
        </div>
    )
}
