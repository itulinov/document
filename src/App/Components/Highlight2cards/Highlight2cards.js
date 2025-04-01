import React from "react"
import Tile from './Tile'

import Classes from "./Highlight2cards.module.css"


function Highlight2cards({docs}) {
    console.log(docs)

    // первые четыре элемента
    const [first, second, third, fourth, ...other] = docs

    return (
        <div className={Classes.Highlight2cards}>
            <div className={Classes.first}>
                <Tile card={first} />
            </div>
            <div className={Classes.second}>
                <div>
                    <Tile card={second} />
                    <Tile card={third} />
                </div>
                <div>
                    <Tile card={fourth} />
                </div>
            </div>
        </div>
    )
}

export default Highlight2cards
